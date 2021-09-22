<template>
  <div class="counter">
    <div>Counter 2: {{ counter }}</div>
    <button @click="counter += 1">Inc</button>
    <button @click="counter -= 1">Dec</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ init?: number }>()
const counter = ref(props.init || 0)
</script>

<style scoped>
.counter {
  padding: 5px 10px 10px;
  border: 2px dashed skyblue;
}

.counter {
  padding: 5px 10px 10px;
  border: 2px dashed skyblue;
}
