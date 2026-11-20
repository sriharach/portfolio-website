import * as yup from 'yup'

type ValidationMessages = {
  name: string
  phone: string
  email: string
  message: string
}

const contractSchema = (messages: ValidationMessages) =>
  yup
    .object({
      name: yup.string().required(messages.name),
      phone_number: yup.string().required(messages.phone),
      mail: yup.string().required(messages.email),
      message: yup.string().required(messages.message),
    })
    .required()

export default contractSchema
