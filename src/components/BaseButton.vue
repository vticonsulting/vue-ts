<script>
import { Vue } from 'vue-property-decorator'

export default class BaseButton extends Vue {
  name = 'BaseButton'

  message = 'Hello World!'

  created() {
    console.log('created')
  }

  mounted() {
    console.log('mounted')
  }

  hello() {
    console.log('Hello World!')
  }
}
</script>

<template>
  <button class="bg-red-400" @click="hello">
    <slot>Button</slot>
  </button>
</template>
