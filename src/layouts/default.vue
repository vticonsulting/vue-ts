<template>
  <main class="p-4">
    <router-view />
  </main>
</template>

<script>
// import '~/styles/tailwind.css'
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// your custom styles here
import '~/styles/main.css'

export default {
  name: 'DefaultLayout',
}
</script>
