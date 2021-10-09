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
      <button :class="[$style.baseButton, variantStyle]" v-bind="$attrs">
        <slot />
      </button>
    </template>
  </VariantStyleProvider>
</template>

<style module>
.baseButton {
  padding: 0.6rem 1rem;
  border: none;
}
</style>
