import { createApp } from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import SmartTable from 'vuejs-smart-table'
import VueSidebarMenu from 'vue-sidebar-menu'

// import '~/assets/css/custom.scss'
// import '~/assets/css/oruga-bootstrap.css'
// import '@oruga-ui/oruga-next/dist/oruga.css'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import '~/assets/css/hancock.scss'
import '~/assets/css/sidebar-menu.scss'

import 'virtual:windi.css'

import BaseAvatar from '~/components/BaseAvatar.vue'
import BaseLogo from '~/components/BaseLogo.vue'
import BaseIconSolid from '~/components/BaseIconSolid.vue'
import BaseIconOutlined from '~/components/BaseIconOutlined.vue'
// import BaseInput from '~/components/BaseInput.vue'

const app = createApp(App)
app.component('base-avatar', BaseAvatar)
app.component('base-logo', BaseLogo)
app.component('base-icon-solid', BaseIconSolid)
app.component('base-icon-outlined', BaseIconOutlined)
// app.component('base-input', BaseInput)
app.use(Oruga)
app.use(SmartTable)
app.use(VueSidebarMenu)
app.mount('#app')
