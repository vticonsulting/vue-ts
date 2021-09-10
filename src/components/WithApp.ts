//  Two APIs: `Vue.with` static method and `prop` helper function.

import { Vue } from 'vue-class-component'

class Props {
  optional?: string
  required!: number
}

class App extends Vue.with(Props) {
  // Vue.with generates the following props option under the hood
  // props: { optional: null, required: null }

  mounted() {
    // It retains the property types for props
    this.optional // string | undefined
    this.required // number
  }
}

export default App