<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import ResourceGalleryItem from '~/components/resource/GalleryItem.vue'

export default defineComponent({
  components: { ResourceGalleryItem },
  props: {
    resources: {
      type: Array,
      default: () => [
        { id: 1, title: 'Resource Title', description: 'Resource Description' },
      ],
    },
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>

<template>
  <ul
    role="list"
    class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    <!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" -->
    <ResourceGalleryItem v-for="resource in resources" :key="resource.id" :resource="resource" />
  </ul>
</template>
