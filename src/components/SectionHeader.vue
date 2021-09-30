<script>
export default {
  computed: {
    hasSubtitleSlot() {
      return !!this.$slots.subtitle
    },
    hasActionsSlot() {
      return !!this.$slots.actions
    },
  },
}
</script>

<template>
  <div class="pb-5 border-b border-gray-200">
    <div class="sm:flex sm:justify-between sm:items-baseline">
      <div class="sm:w-0 sm:flex-1">
        <h2 class="text-lg font-medium text-gray-900">
          <slot />
        </h2>

        <p
          v-if="hasSubtitleSlot"
          class="mt-1 overflow-hidden text-sm text-gray-500 overflow-ellipsis"
        >
          <slot name="subtitle" />
        </p>
      </div>

      <div
        v-if="hasActionsSlot"
        class="flex items-center justify-between mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
      >
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
