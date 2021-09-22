<template>
  <input ref="input" />
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class InputFocus extends Vue {
  $refs!: {
    input: HTMLInputElement
  }

  mounted() {
    this.$refs.input.focus()
  }
}
</script>
