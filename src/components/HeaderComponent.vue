<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({

  setup() {
    // const searchInput = ref(null)

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // console.log(searchInput.value) // <div>This is a root element</div>
      // searchInput.value.focus()
    })

    // return {
    // searchInput,
    // }
  },
})
</script>
<template>
  <header class="app-header">
    <nav class="app-header-menu">
      <h1 class="title flex-1">
        <slot>App Header Slot</slot>
      </h1>
      <div class="actions">
        <button class="app-button">
          <base-icon-solid name="question-mark-circle"></base-icon-solid>
        </button>
        <button class="app-button">
          <base-icon-solid name="cog"></base-icon-solid>
        </button>
        <button class="app-button">
          <base-icon-solid name="bell"></base-icon-solid>
        </button>
      </div>
    </nav>
  </header>
</template>
