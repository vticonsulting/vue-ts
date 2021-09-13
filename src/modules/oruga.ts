import Oruga from '@oruga-ui/oruga-next'
import { UserModule } from '~/types'

// import '~/assets/css/oruga-bootstrap.css'
// import '@oruga-ui/oruga-next/dist/oruga.css'

export const install: UserModule = ({ app }) => {
  app.use(Oruga)
}
