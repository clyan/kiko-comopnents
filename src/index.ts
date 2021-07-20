import { App } from 'vue';
import KText from './components/KText/KText.vue'

const components = [
  KText
]
const install = (app: App)=> {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export {
  KText,
  install
}

export default {
  install
}