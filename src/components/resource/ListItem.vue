<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { format } from 'date-fns'

export default defineComponent({
  props: {
    resource: Object,
    default: () => { },
  },
  setup(props) {
    const { t } = useI18n
    return { format, t }
  },
})
</script>

<template>
  <li
    class="relative px-4 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600"
  >
    <div class="flex justify-between space-x-3">
      <div class="flex-1 min-w-0">
        <a href="#" class="block focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true"></span>
          <p class="text-sm font-medium text-gray-900 truncate">{{ resource.title }}</p>
          <p class="text-sm text-gray-500 truncate">{{ resource.description }}</p>
        </a>
      </div>
      <time
        datetime="2021-01-27T16:35"
        class="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
      >{{ format(new Date(resource.date), 'MMM do yyyy') }}</time>
    </div>
    <div class="mt-1">
      <p class="text-sm text-gray-600 line-clamp-2">{{ resource.description }}</p>
    </div>
  </li>
</template>
