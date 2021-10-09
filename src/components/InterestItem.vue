<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: 'Enable',
    },
    description: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [
        {
          id: 1,
          slug: 'dashboard',
          label: 'Dashboard',
        },
      ],
    },
  },
  setup() {
    const { t } = useI18n()
    const on = ref(false)
    const onClickAway = () => {
      on.value = false
    }

    return { onClickAway, on, t }
  },
})
</script>

<template>
  <li class="flex items-center justify-between py-4">
    <div class="flex flex-col">
      <p id="`${label}-label`" class="text-sm font-medium text-gray-900" @click="on = !on">
        <slot>{{ label }}</slot>
      </p>
      <p
        v-if="description"
        :id="`${label}-description`"
        class="text-sm text-gray-500"
      >{{ description }}</p>
    </div>
    <button
      type="button"
      class="relative inline-flex flex-shrink-0 h-6 ml-4 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      :class="{ 'bg-primary-500': on, 'bg-gray-200': !on }"
      :aria-labelledby="label"
      :aria-describedby="description"
      :aria-pressed="on"
      @click="on = !on"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"
        :class="{ 'translate-x-5': on, 'translate-x-0': !on }"
      />
    </button>
  </li>
</template>
