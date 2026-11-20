// libs
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { useTranslations } from 'next-intl'

// types
import { FormContract } from '@/types/models/contract.modal'

// libs
import contractSchema from '@/libs/contractSchema'

const useContact = () => {
  const t = useTranslations('contact')
  const validation = useTranslations('contact.validation')
  const [loading, setLoading] = useState(false)

  const serviceID = process.env.SERVICE_ID as string
  const templateID = process.env.TEMPLATE_ID as string
  const publicKey = process.env.PUBLIC_KEY as string

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormContract>({
    resolver: yupResolver(
      contractSchema({
        name: validation('name'),
        phone: validation('phone'),
        email: validation('email'),
        message: validation('message'),
      }),
    ),
  })

  const handleSubmitContract = handleSubmit((data) => {
    setLoading(true)
    emailjs
      .send(serviceID, templateID, data as never, {
        publicKey,
      })
      .then(() => {
        setLoading(false)
        reset({
          name: '',
          mail: '',
          message: '',
          phone_number: '',
        })
        clearErrors()
        toast.success(t('success'))
      })
      .catch(() => {
        setLoading(false)
        toast.error(t('error'))
      })
  })

  return {
    errors,
    loading,
    register,
    onSubmitContract: handleSubmitContract,
  }
}

export default useContact
