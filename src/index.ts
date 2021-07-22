import { App } from 'vue';
import KImage from './components/KImage';
import KText from './components/KText/KText.vue'
export { 
  textDefaultProps , textStylePropNames, TextComponentProps,
  imageDefaultProps, imageStylePropsNames, ImageComponentProps,
  AllComponentProps
} from './defaultProps'
const components = [
  KText,
  KImage
]
const install = (app: App)=> {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export {
  KText,
  KImage,
  install
}

export default {
  install
}