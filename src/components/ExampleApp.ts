import { defineComponent, PropType } from 'vue';

interface Person {
  firstName: string
  lastName: string
}

const App = defineComponent({
  props: {
    // Specify value `Object` then annotate it with `PropType<Person>`
    person: Object as PropType<Person>
  }
})

export default App;