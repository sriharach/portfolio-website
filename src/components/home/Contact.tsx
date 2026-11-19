import { useTranslations } from 'next-intl'
import { MdAlternateEmail, MdOutlinePhoneIphone } from 'react-icons/md'
import InputDaisyUi from '../daisyUI/inputDaisyUi/inputDaisyUi'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'
import TextAreaDaisyUi from '../daisyUI/textAreaDaisyUi/textAreaDaisyUi'
import SectionBox from '../shared/sectionBox/sectionBox'
import TextTopic from '../shared/textTopic/textTopic'
import useContact from '@/hooks/useContact'
import styled from './home.module.css'

const Contact = () => {
  const t = useTranslations('contact')
  const { errors, loading, register, onSubmitContract } = useContact()

  return (
    <SectionBox id='contact' className='bg-main-color-primavera2'>
      <div>
        <p className={styled['section-kicker']}>{t('eyebrow')}</p>
        <TextTopic text={t('title')} className='mb-8 max-w-lg text-3xl font-bold leading-tight sm:text-5xl' />
        <p className={styled['contact-copy']}>{t('description')}</p>
        <div className={styled['contact-details']}>
          <div className={styled['contact-detail']}>
            <MdAlternateEmail aria-hidden='true' className='size-5 text-main-color-primavera1' />
            <span>folksriharach@gmail.com</span>
          </div>
          <div className={styled['contact-detail']}>
            <MdOutlinePhoneIphone aria-hidden='true' className='size-5 text-main-color-primavera1' />
            <span>096-301-11722</span>
          </div>
        </div>
      </div>

      <form className='flex w-full flex-col gap-4 border border-main-color-primavera4/15 bg-base-100 p-5 sm:p-7' onSubmit={onSubmitContract}>
        <h3 className='mb-1 text-xl font-bold text-main-color-primavera4'>{t('formTitle')}</h3>
        <fieldset className='flex flex-col gap-4' disabled={loading}>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold text-main-color-primavera4' htmlFor='contact-name'>{t('name')}</label>
            <InputDaisyUi
              {...register('name')}
              aria-invalid={!!errors.name?.message}
              className='w-full border-main-color-primavera4/20 bg-base-100'
              id='contact-name'
              inputError={!!errors.name?.message}
              placeholder={t('namePlaceholder')}
            />
            {errors.name?.message && <span className='text-sm text-red-700' role='alert'>{errors.name.message}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold text-main-color-primavera4' htmlFor='contact-email'>{t('email')}</label>
            <InputDaisyUi
              {...register('mail')}
              aria-invalid={!!errors.mail?.message}
              className='w-full border-main-color-primavera4/20 bg-base-100'
              id='contact-email'
              inputError={!!errors.mail?.message}
              placeholder={t('emailPlaceholder')}
              type='email'
            />
            {errors.mail?.message && <span className='text-sm text-red-700' role='alert'>{errors.mail.message}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold text-main-color-primavera4' htmlFor='contact-phone'>{t('phone')}</label>
            <InputDaisyUi
              {...register('phone_number')}
              aria-invalid={!!errors.phone_number?.message}
              className='w-full border-main-color-primavera4/20 bg-base-100'
              id='contact-phone'
              inputError={!!errors.phone_number?.message}
              placeholder={t('phonePlaceholder')}
              type='tel'
            />
            {errors.phone_number?.message && <span className='text-sm text-red-700' role='alert'>{errors.phone_number.message}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-bold text-main-color-primavera4' htmlFor='contact-message'>{t('message')}</label>
            <TextAreaDaisyUi
              {...register('message')}
              aria-invalid={!!errors.message?.message}
              id='contact-message'
              inputError={!!errors.message?.message}
              placeholder={t('messagePlaceholder')}
              rows={4}
            />
            {errors.message?.message && <span className='text-sm text-red-700' role='alert'>{errors.message.message}</span>}
          </div>
          <ButtonDaisyUi className='mt-1 text-white' fullWidth loading={loading} text={t('submit')} type='submit' />
        </fieldset>
      </form>
    </SectionBox>
  )
}

export default Contact
