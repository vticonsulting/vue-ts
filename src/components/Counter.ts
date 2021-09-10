import { defineComponent } from 'vue'

// The type Props = { count: number } in component type
const Counter = defineComponent({
  props: {
    count: {
      type: Number,
      required: true
    }
  }
})

export default Counter