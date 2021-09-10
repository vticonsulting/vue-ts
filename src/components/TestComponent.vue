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

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator'

export default class App extends Vue {
  @Prop({ default: 'world' }) readonly propMessage!: string

  // inital data
  msg: number = 123

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted() {
    this.greet()
  }

  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }

  // method
  greet() {
    alert('greeting: ' + this.msg)
  }
}
</script>