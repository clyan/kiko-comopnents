import { PropType } from 'vue';
import { ComponentData, PageData } from '../../defaultProps';
declare const _default: import("vue").DefineComponent<{
    page: {
        type: PropType<PageData>;
    };
    components: {
        type: PropType<ComponentData[]>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    page?: unknown;
    components?: unknown;
} & {
    components: ComponentData[];
} & {
    page?: PageData | undefined;
}>, {}>;
export default _default;
