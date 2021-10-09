<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>

<template>
  <div class="flex-1 min-w-0">
    <label for="search" class="sr-only">{{ t('search') }}</label>
    <div class="relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BaseIconSolid name="search" class="text-gray-400" />
      </div>
      <input
        id="search"
        type="search"
        name="search"
        autocomplete="off"
        class="block w-full pl-10 border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        :placeholder="t('search')"
      />
    </div>
  </div>
</template>
