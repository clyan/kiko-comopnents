import { App } from 'vue';
import KImage from './KImage.vue'

KImage.install  = (app: App) => {
  app.component(KImage.name, KImage)
}
export default KImage