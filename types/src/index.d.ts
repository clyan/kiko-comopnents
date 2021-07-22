import { App } from 'vue';
import KImage from './components/KImage';
import KText from './components/KText/KText.vue';
export { textDefaultProps, textStylePropNames, TextComponentProps, imageDefaultProps, imageStylePropsNames, ImageComponentProps, AllComponentProps } from './defaultProps';
declare const install: (app: App) => void;
export { KText, KImage, install };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
