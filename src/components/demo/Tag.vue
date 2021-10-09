<script>
import { defineComponent } from 'vue'
import VariantStyleProvider from '~/components/global/VariantStyleProvider.vue'

export default defineComponent({
  components: {
    VariantStyleProvider,
  },
  props: {
    variant: {
      type: String,
      validators: value =>
        ['primary', 'secondary', 'warning', 'danger'].includes(value),
    },
  },
})
</script>

<template>
  <VariantStyleProvider :variant="variant">
    <template #default="{ variantStyle }">
      <div :class="[$style.baseTag, variantStyle]" v-bind="$attrs">
        <slot />
      </div>
    </template>
  </VariantStyleProvider>
</template>

<style module>
.baseTag {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 1.5rem;
}
</style>
