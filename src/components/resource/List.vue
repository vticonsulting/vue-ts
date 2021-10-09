<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import ResourceListItem from '~/components/resource/ListItem.vue'

export default defineComponent({
  components: { ResourceListItem },
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
  <ul class="divide-y divide-gray-200">
    <ResourceListItem v-for="resource in resources" :key="resource.id" :resource="resource" />
  </ul>
</template>
