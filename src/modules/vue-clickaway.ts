import VueClickAway from 'vue3-click-away'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(VueClickAway)
}
