<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'VTi Consulting',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view />
</template>
