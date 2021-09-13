<script setup lang="ts">
import { useMouse, useCounter } from '@vueuse/core';
const { x, y } = useMouse();
const { count, inc, dec } = useCounter(0);
</script>

<template>
  <h3>Mouse: {{ x }} &times; {{ y }}</h3>
  <h3>
    Counter: {{ count }}
    <button @click="inc()">+</button>
    <button @click="dec()">-</button>
  </h3>
</template>
