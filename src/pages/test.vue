<script setup>
import { useMouse } from '@vueuse/core'
import { Bar } from '~/components/ExampleComponent';
// eslint-disable-next-line prefer-const
let { x, y } = $(useMouse())

console.log(x, y)

// declaring a variable that compiles to a ref
let count = $ref(1)

console.log(count) // 1

function inc() {
  // the variable can be used like a plain value
  count++
}
</script>

<template>
  <button @click="inc">{{ count }}</button>
  {{ x }} {{ y }}
  <Bar />
  <Welcome />
</template>

<route lang="yaml">
meta:
  layout: hancock
</route>
