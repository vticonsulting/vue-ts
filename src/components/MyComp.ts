import { Vue, prop } from 'vue-class-component'

// class Props {
//   count = prop({
//     type: Number,
//     required: true,
//     validator: (value: number) => value >= 0
//   })
// }

class Props {
  foo?: string
  bar!: string
  baz = prop<string>({ default: 'default value' })
}

export default class MyComp extends Vue.with(Props) {

}