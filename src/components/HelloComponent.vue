<template>
  <div>Hello {{ msg }}</div>
</template>

<script lang="ts">
import { Vue, prop } from "vue-class-component";

class Props {
  msg = prop<string>({ default: "World" })
}

export default class HelloComponent extends Vue.with(Props) {
  mounted() {
    console.log("hello component mounted");
  }
}
</script>
