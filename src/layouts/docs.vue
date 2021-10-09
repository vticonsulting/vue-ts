<template>
  <div :class="['app-layout', collapsed ? 'collapsed' : '']">
    <HeaderComponent />

    <main class="prose app-main">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// your custom styles here
import '~/styles/main.css'

export default {
  name: 'DocsLayout',
}
</script>
