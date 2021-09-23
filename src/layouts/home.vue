<script lang="ts">
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// your custom styles here
import '~/styles/main.css'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'

// windicss devtools support (dev only)
import 'virtual:windi-devtools'
</script>
<template>
  <AppNavbar />
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />

    <Footer />
  </main>
</template>
