<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({

  setup() {
    const searchInput = ref(null)

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(searchInput.value) // <div>This is a root element</div>
      searchInput.value.focus()
    })

    return {
      searchInput,
    }
  },
})
</script>
<template>
  <header
    class="px-4 pageHeader d-flex justify-content-between align-items-center"
    style="height: 4rem;"
  >
    <div class="w-full">
      <input ref="searchInput" type="search" class="form-control" />
    </div>

    <div>
      <!-- <button type="button" class="btn btn-light">Learn more</button> -->
      <!-- <button type="button" class="btn btn-dark">Donate</button> -->
    </div>
  </header>
</template>
