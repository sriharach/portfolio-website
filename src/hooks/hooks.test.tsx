import { act, cleanup, renderHook, waitFor } from '@testing-library/react'
import { createElement, type PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import messages from '../../messages/en.json'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import useAbout from './useAbout'
import useContact from './useContact'
import useHome from './useHome'
import useLayoutHeader from './useLayoutHeader'
import usePortfolio from './usePortfolio'
import useResponsive from './useResponsive'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() },
}))

vi.mock('react-toastify', () => ({
  toast: { error: vi.fn(), success: vi.fn() },
}))

vi.mock('@/components/modules/layouts/layout.module.css', () => ({
  default: { 'layout__header-push-content': 'header-scrolled' },
}))

const intlWrapper = ({ children }: PropsWithChildren) =>
  createElement(NextIntlClientProvider, { locale: 'en', messages }, children)

const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: height })
}

const submitEvent = {
  preventDefault: vi.fn(),
  persist: vi.fn(),
} as never

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

beforeEach(() => {
  vi.clearAllMocks()
  setViewport(1280, 800)
  process.env.SERVICE_ID = 'service-test'
  process.env.TEMPLATE_ID = 'template-test'
  process.env.PUBLIC_KEY = 'public-test'
})

describe('useHome and usePortfolio', () => {
  it('opens the supplied social URL in a new tab', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { result } = renderHook(() => useHome())

    act(() => result.current.onClickRedirect('https://example.com/profile'))

    expect(open).toHaveBeenCalledWith('https://example.com/profile', '_blank')
  })

  it('opens a project URL in a new tab', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { result } = renderHook(() => usePortfolio())

    act(() => result.current.onClickRedirect('https://example.com/project'))

    expect(open).toHaveBeenCalledWith('https://example.com/project', '_blank')
  })
})

describe('useResponsive', () => {
  it('reports the initial viewport and updates after resizing', () => {
    setViewport(1280, 800)
    const { result } = renderHook(() => useResponsive())

    expect(result.current).toEqual({ width: 1280, height: 800 })

    act(() => {
      setViewport(390, 844)
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toEqual({ width: 390, height: 844 })
  })
})

describe('useAbout', () => {
  it('detects mobile viewport width and downloads the CV from the base path', async () => {
    setViewport(390, 844)
    const blob = new Blob(['cv'])
    const fetchMock = vi.fn().mockResolvedValue({ blob: () => Promise.resolve(blob) })
    const createObjectURL = vi.fn().mockReturnValue('blob:cv')
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {})
    vi.stubGlobal('fetch', fetchMock)
    Object.defineProperty(window.URL, 'createObjectURL', {
      configurable: true,
      value: createObjectURL,
    })
    const { result } = renderHook(() => useAbout())

    expect(result.current.isMobileResponsive).toBe(true)

    act(() => result.current.onClickDownloadCV())

    await waitFor(() => expect(click).toHaveBeenCalled())
    expect(fetchMock).toHaveBeenCalledWith('/portfolio/cv-sriharach.pdf')
    expect(createObjectURL).toHaveBeenCalledWith(blob)
  })
})

describe('useLayoutHeader', () => {
  it('toggles the scrolled class and updates page progress', () => {
    const header = document.createElement('header')
    header.id = 'layout-header'
    document.body.append(header)
    Object.defineProperty(document.body, 'scrollHeight', {
      configurable: true,
      value: 1600,
    })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 400 })
    setViewport(1280, 800)
    const { unmount } = renderHook(() => useLayoutHeader())

    act(() => window.dispatchEvent(new Event('scroll')))
    expect(header.classList.contains('header-scrolled')).toBe(false)
    expect(document.documentElement.style.getPropertyValue('--progress')).toBe('50%')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 })
    act(() => window.dispatchEvent(new Event('scroll')))
    expect(header.classList.contains('header-scrolled')).toBe(true)

    unmount()
  })
})

describe('useContact', () => {
  it('submits valid form data and shows the localized success toast', async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: 'OK' })
    const { result } = renderHook(() => useContact(), { wrapper: intlWrapper })

    await act(async () => {
      await result.current.register('name').onChange({ target: { name: 'name', value: 'Sriharach' } })
      await result.current.register('mail').onChange({ target: { name: 'mail', value: 'hello@example.com' } })
      await result.current.register('phone_number').onChange({ target: { name: 'phone_number', value: '0123456789' } })
      await result.current.register('message').onChange({ target: { name: 'message', value: 'Hello' } })
      await result.current.onSubmitContract(submitEvent)
    })

    await waitFor(() => expect(toast.success).toHaveBeenCalledWith('Your message has been sent.'))
    expect(emailjs.send).toHaveBeenCalledWith(
      'service-test',
      'template-test',
      {
        name: 'Sriharach',
        mail: 'hello@example.com',
        phone_number: '0123456789',
        message: 'Hello',
      },
      { publicKey: 'public-test' },
    )
    expect(result.current.loading).toBe(false)
  })

  it('shows localized validation errors without sending an incomplete form', async () => {
    const { result } = renderHook(() => useContact(), { wrapper: intlWrapper })

    await act(async () => result.current.onSubmitContract(submitEvent))

    expect(result.current.errors.name?.message).toBe('Please enter your name.')
    expect(result.current.errors.mail?.message).toBe('Please enter your email address.')
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('shows the localized error toast when EmailJS rejects', async () => {
    vi.mocked(emailjs.send).mockRejectedValue(new Error('network error'))
    const { result } = renderHook(() => useContact(), { wrapper: intlWrapper })

    await act(async () => {
      await result.current.register('name').onChange({ target: { name: 'name', value: 'Sriharach' } })
      await result.current.register('mail').onChange({ target: { name: 'mail', value: 'hello@example.com' } })
      await result.current.register('phone_number').onChange({ target: { name: 'phone_number', value: '0123456789' } })
      await result.current.register('message').onChange({ target: { name: 'message', value: 'Hello' } })
      await result.current.onSubmitContract(submitEvent)
    })

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Something went wrong. Please try again later.'))
    expect(result.current.loading).toBe(false)
  })
})