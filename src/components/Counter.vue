<template>
  <div>
    <button v-on:click="decrement">decrement</button>
    <button v-on:click="increment">increment</button>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Counter extends Vue {
  count = 0;

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }
}
</script>
