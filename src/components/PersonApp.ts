import { Prop, Vue } from 'vue-property-decorator';

interface Person {
  firstName: string
  lastName: string
}

class App extends Vue {
  // Just specify `Person` type (and `@Prop` decorator)
  @Prop() person: Person | undefined
}

export default App;