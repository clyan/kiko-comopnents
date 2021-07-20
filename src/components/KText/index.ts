import { App } from 'vue';
import KText from './KText.vue'

KText.install  = (app: App) => {
  app.component(KText.name, KText)
}
export default KText