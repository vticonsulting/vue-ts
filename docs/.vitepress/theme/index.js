import DefaultTheme from 'vitepress/theme'
import MyLayout from './Mylayout'
import './custom.css'

export default {
  ...DefaultTheme,

  Layout: MyLayout,

  enhanceApp({ app }) {
    // app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
