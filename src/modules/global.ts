import GStore from '~/store'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.provide('GStore', GStore)
}
