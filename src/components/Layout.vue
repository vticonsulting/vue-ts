<script>
export default {
  name: 'DefaultLayout',
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
}
</script>

<template>
  <div class="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-primary-50">
    <header v-if="hasHeaderSlot">
      <slot name="header" />
    </header>

    <slot />

    <footer v-if="hasFooterSlot">
      <slot name="footer" />
    </footer>
  </div>
</template>
