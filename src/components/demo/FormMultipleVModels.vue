<template>
  <form @submit.prevent="$emit('submit')">
    <div :class="$style.formBlock">
      <label :class="$style.label">Name</label>
      <input v-model="nameState" :class="$style.input" type="text" aria-label="Name input" />
    </div>
    <div :class="$style.formBlock">
      <label :class="$style.label">Surname</label>
      <input v-model="surnameState" :class="$style.input" type="text" aria-label="Surname input" />
    </div>
    <div>
      <button
        class="float-right px-4 py-3 font-semibold text-blue-900 bg-blue-100 rounded"
        type="submit"
      >Submit</button>
    </div>
  </form>
</template>

<script>
import { useVModel } from '../composables/useVModel.js'
export default {
  props: {
    name: String,
    surname: String,
  },
  emits: ['update:name', 'update:surname', 'submit'],
  setup(props) {
    return {
      nameState: useVModel(props, 'name'),
      surnameState: useVModel(props, 'surname'),
    }
  },
}
</script>

<style module>
.formBlock {
  @apply flex flex-col mb-4;
}
.label {
  @apply mb-2;
}
.input {
  @apply px-4 py-3 shadow rounded border border-gray-300 bg-white;
}
</style>
