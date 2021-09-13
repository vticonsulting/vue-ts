import { abilitiesPlugin } from '@casl/vue'
import ability from '~/services/ability'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  })
}
