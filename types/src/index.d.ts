import { App } from 'vue';
import KImage from './components/KImage';
import KText from './components/KText/KText.vue';
import FinalPage from './components/FinalPage';
export { commonDefaultProps, textDefaultProps, textStylePropNames, imageDefaultProps, imageStylePropsNames, } from './defaultProps';
export { CommonComponentProps, TextComponentProps, ImageComponentProps, AllComponentProps, transformToComponentProps, isEditingProp, } from './defaultProps';
declare const install: (app: App) => void;
export { KText, KImage, FinalPage, install };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
