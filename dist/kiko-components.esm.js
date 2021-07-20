import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString } from 'vue';
import { pick, without, mapValues } from 'lodash-es';

const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
    const handleClick = () => {
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick
    };
};

const commonDefaultProps = {
    // actions
    actionType: '',
    url: '',
    isEditing: false,
    // size
    height: '',
    width: '375px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
};
const imageDefaultProps = {
    src: 'test.url',
    ...commonDefaultProps,
    width: '373px'
};
const textDefaultProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps
};
const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
without(Object.keys(imageDefaultProps), 'src');
const isEditingProp = {
    isEditing: {
        type: Boolean,
        default: false
    }
};
const transformToComponentProps = (props) => {
    const mapProps = mapValues(props, (item) => {
        return {
            type: item.constructor,
            default: item
        };
    });
    return {
        ...mapProps,
        ...isEditingProp
    };
};

const defaultProps = transformToComponentProps(textDefaultProps);
var script = defineComponent({
    name: 'KText',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        ...defaultProps,
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
        return {
            styleProps,
            handleClick
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: _ctx.styleProps,
    onClick: _ctx.handleClick,
    class: "k-text-component"
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "onClick"]))
}

script.render = render;
script.__file = "src/components/KText/KText.vue";

const components = [
    script
];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
var index = {
    install
};

export default index;
export { script as KText, install };
