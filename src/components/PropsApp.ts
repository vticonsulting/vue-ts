import { Vue, prop } from 'vue-class-component'

interface Person {
  firstName: string
  lastName: string
}

class Props {
  // optional prop
  foo?: string

  // required prop
  bar!: string

  // optional prop with default
  baz = prop<string>({ default: 'default value' })

  person = prop<Person>({ default: { firstName: '', lastName: '' } })

  // with validator
  count: number = prop({
    validator: (count: number) => count >= 0
  })

  // with default
  // You can specify the type via `prop` type parameter
  amount = prop<number>({ default: 1 })

  // type is `string`
  required!: string

  // type is `WithDefault<string>`
  withDefault = prop({ default: 'default' })
}

export default class MyComp extends Vue.with(Props) {
  mounted() {
    this.required // string
    this.withDefault // string
  }
}