<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  props: ['event'],
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>

<template>
  <div class="relative pb-32 overflow-hidden bg-primary-700">
    <!-- Menu open: "bottom-0", Menu closed: "inset-y-0" -->
    <div
      class="absolute inset-x-0 inset-y-0 flex justify-center w-full overflow-hidden transform -translate-x-1/2 left-1/2 lg:inset-y-0"
      aria-hidden="true"
    >
      <div class="flex-grow bg-opacity-75 bg-primary-900"></div>
      <svg
        class="flex-shrink-0"
        width="1750"
        height="308"
        viewBox="0 0 1750 308"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity=".75" d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#CB6548" />
        <path opacity=".75" d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#CB6548" />
      </svg>
      <div class="flex-grow bg-opacity-75 bg-primary-800"></div>
    </div>
    <header class="relative py-10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">{{ t('profile') }}</h1>
      </div>
    </header>
  </div>
</template>
