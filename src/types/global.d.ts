import keyTypeMessages from '../../messages/en.json'

type Messages = typeof keyTypeMessages

declare global {
  type IntlMessages = Messages
}
