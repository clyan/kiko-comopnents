import { App } from 'vue';
import KImage from './components/KImage';
import KText from './components/KText/KText.vue'
import FinalPage from './components/FinalPage'
export { 
  commonDefaultProps,
  textDefaultProps , 
  textStylePropNames,
  imageDefaultProps, 
  imageStylePropsNames,
} from './defaultProps'

export { 
  CommonComponentProps,
  TextComponentProps,
  ImageComponentProps,
  AllComponentProps,
  transformToComponentProps,
  isEditingProp,
} from './defaultProps'

const components = [
  KText,
  KImage,
  FinalPage
]
const install = (app: App)=> {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export {
  KText,
  KImage,
  FinalPage,
  install
}

export default {
  install
}