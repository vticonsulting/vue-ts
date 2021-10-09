<template>
  <p :style="style">{{ label }}</p>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';

export default {
  name: 'btn',

  props: {
    label: {
      type: String,
      default: 'Hello',
      required: true,
    },
    size: {
      type: Number,
      default: 14,
    },
  },

  setup(props: any, { emit }: any) {
    props = reactive(props);
    return {
      style: computed(() => ({
        fontSize: `${props.size}px`,
      })),
    }
  },
};
</script>

<style scoped>
.btn {
  font-weight: 400;
}
</style>
