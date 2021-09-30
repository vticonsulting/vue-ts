<script lang="ts">
import { Vue } from 'vue-class-component'

class Props {
  propMessage!: string
}

export default class HelloClassComponent extends Vue.with(Props) {
  // inital data
  msg = 123
  // use prop values for initial data
  helloMsg = `Hello ${this.propMessage}`
  // lifecycle hook
  mounted() {
    this.greet()
  }

  // computed
  get computedMsg() {
    return `computed ${this.msg}`
  }

  // method
  greet() {
    alert(`greeting: ${this.msg}`)
  }
}
</script>
<template>
  <div>
    <input v-model="msg" />
    <p>prop: {{ propMessage }}</p>
    <p>msg: {{ msg }}</p>
    <p>helloMsg: {{ helloMsg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <p>
      <button @click="greet">Greet</button>
    </p>
  </div>
</template>
