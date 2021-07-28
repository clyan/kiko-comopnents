import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

export declare type AllComponentProps = TextComponentProps & ImageComponentProps;

declare interface CommonComponentProps {
    actionType: string;
    url: string;
    isEditing: boolean;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: string;
    position: string;
    left: string;
    top: string;
    right: string;
}

declare interface ComponentData {
    props: {
        [key: string]: any;
    };
    id: string;
    name: string;
    layerName?: string;
    isHidden?: boolean;
    isLocked?: boolean;
}

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

export declare const FinalPage: DefineComponent<    {
page: {
type: PropType<PageData>;
};
components: {
type: PropType<ComponentData[]>;
required: true;
};
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
page?: unknown;
components?: unknown;
} & {
components: ComponentData[];
} & {
page?: PageData | undefined;
}>, {}>;

export declare interface ImageComponentProps extends CommonComponentProps {
    src: string;
}

export declare const imageDefaultProps: ImageComponentProps;

export declare const imageStylePropsNames: string[];

export declare const install: (app: App) => void;

export declare const KImage: DefineComponent<    {
src: {
type: StringConstructor;
default: string | boolean;
};
actionType: {
type: StringConstructor;
default: string | boolean;
};
url: {
type: StringConstructor;
default: string | boolean;
};
isEditing: {
type: StringConstructor;
default: string | boolean;
} & {
type: BooleanConstructor;
default: boolean;
};
height: {
type: StringConstructor;
default: string | boolean;
};
width: {
type: StringConstructor;
default: string | boolean;
};
paddingLeft: {
type: StringConstructor;
default: string | boolean;
};
paddingRight: {
type: StringConstructor;
default: string | boolean;
};
paddingTop: {
type: StringConstructor;
default: string | boolean;
};
paddingBottom: {
type: StringConstructor;
default: string | boolean;
};
borderStyle: {
type: StringConstructor;
default: string | boolean;
};
borderColor: {
type: StringConstructor;
default: string | boolean;
};
borderWidth: {
type: StringConstructor;
default: string | boolean;
};
borderRadius: {
type: StringConstructor;
default: string | boolean;
};
boxShadow: {
type: StringConstructor;
default: string | boolean;
};
opacity: {
type: StringConstructor;
default: string | boolean;
};
position: {
type: StringConstructor;
default: string | boolean;
};
left: {
type: StringConstructor;
default: string | boolean;
};
top: {
type: StringConstructor;
default: string | boolean;
};
right: {
type: StringConstructor;
default: string | boolean;
};
}, {
styleProps: ComputedRef<Partial<Readonly<Partial<CommonComponentProps>>>>;
handleClick: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
src?: unknown;
actionType?: unknown;
url?: unknown;
isEditing?: unknown;
height?: unknown;
width?: unknown;
paddingLeft?: unknown;
paddingRight?: unknown;
paddingTop?: unknown;
paddingBottom?: unknown;
borderStyle?: unknown;
borderColor?: unknown;
borderWidth?: unknown;
borderRadius?: unknown;
boxShadow?: unknown;
opacity?: unknown;
position?: unknown;
left?: unknown;
top?: unknown;
right?: unknown;
} & {
src: string;
actionType: string;
url: string;
isEditing: boolean;
height: string;
width: string;
paddingLeft: string;
paddingRight: string;
paddingTop: string;
paddingBottom: string;
borderStyle: string;
borderColor: string;
borderWidth: string;
borderRadius: string;
boxShadow: string;
opacity: string;
position: string;
left: string;
top: string;
right: string;
} & {}>, {
src: string;
actionType: string;
url: string;
isEditing: boolean;
height: string;
width: string;
paddingLeft: string;
paddingRight: string;
paddingTop: string;
paddingBottom: string;
borderStyle: string;
borderColor: string;
borderWidth: string;
borderRadius: string;
boxShadow: string;
opacity: string;
position: string;
left: string;
top: string;
right: string;
}>;

export declare const KText: DefineComponent<    {
text: {
type: StringConstructor;
default: string | boolean;
};
fontSize: {
type: StringConstructor;
default: string | boolean;
};
fontFamily: {
type: StringConstructor;
default: string | boolean;
};
fontWeight: {
type: StringConstructor;
default: string | boolean;
};
fontStyle: {
type: StringConstructor;
default: string | boolean;
};
textDecoration: {
type: StringConstructor;
default: string | boolean;
};
lineHeight: {
type: StringConstructor;
default: string | boolean;
};
textAlign: {
type: StringConstructor;
default: string | boolean;
};
color: {
type: StringConstructor;
default: string | boolean;
};
backgroundColor: {
type: StringConstructor;
default: string | boolean;
};
wordBreak: {
type: StringConstructor;
default: string | boolean;
};
actionType: {
type: StringConstructor;
default: string | boolean;
};
url: {
type: StringConstructor;
default: string | boolean;
};
isEditing: {
type: StringConstructor;
default: string | boolean;
} & {
type: BooleanConstructor;
default: boolean;
};
height: {
type: StringConstructor;
default: string | boolean;
};
width: {
type: StringConstructor;
default: string | boolean;
};
paddingLeft: {
type: StringConstructor;
default: string | boolean;
};
paddingRight: {
type: StringConstructor;
default: string | boolean;
};
paddingTop: {
type: StringConstructor;
default: string | boolean;
};
paddingBottom: {
type: StringConstructor;
default: string | boolean;
};
borderStyle: {
type: StringConstructor;
default: string | boolean;
};
borderColor: {
type: StringConstructor;
default: string | boolean;
};
borderWidth: {
type: StringConstructor;
default: string | boolean;
};
borderRadius: {
type: StringConstructor;
default: string | boolean;
};
boxShadow: {
type: StringConstructor;
default: string | boolean;
};
opacity: {
type: StringConstructor;
default: string | boolean;
};
position: {
type: StringConstructor;
default: string | boolean;
};
left: {
type: StringConstructor;
default: string | boolean;
};
top: {
type: StringConstructor;
default: string | boolean;
};
right: {
type: StringConstructor;
default: string | boolean;
};
tag: {
type: StringConstructor;
default: string;
};
}, {
styleProps: ComputedRef<Partial<Readonly<Partial<CommonComponentProps>>>>;
handleClick: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
text?: unknown;
fontSize?: unknown;
fontFamily?: unknown;
fontWeight?: unknown;
fontStyle?: unknown;
textDecoration?: unknown;
lineHeight?: unknown;
textAlign?: unknown;
color?: unknown;
backgroundColor?: unknown;
wordBreak?: unknown;
actionType?: unknown;
url?: unknown;
isEditing?: unknown;
height?: unknown;
width?: unknown;
paddingLeft?: unknown;
paddingRight?: unknown;
paddingTop?: unknown;
paddingBottom?: unknown;
borderStyle?: unknown;
borderColor?: unknown;
borderWidth?: unknown;
borderRadius?: unknown;
boxShadow?: unknown;
opacity?: unknown;
position?: unknown;
left?: unknown;
top?: unknown;
right?: unknown;
tag?: unknown;
} & {
text: string;
fontSize: string;
fontFamily: string;
fontWeight: string;
fontStyle: string;
textDecoration: string;
lineHeight: string;
textAlign: string;
color: string;
backgroundColor: string;
wordBreak: string;
actionType: string;
url: string;
isEditing: boolean;
height: string;
width: string;
paddingLeft: string;
paddingRight: string;
paddingTop: string;
paddingBottom: string;
borderStyle: string;
borderColor: string;
borderWidth: string;
borderRadius: string;
boxShadow: string;
opacity: string;
position: string;
left: string;
top: string;
right: string;
tag: string;
} & {}>, {
text: string;
fontSize: string;
fontFamily: string;
fontWeight: string;
fontStyle: string;
textDecoration: string;
lineHeight: string;
textAlign: string;
color: string;
backgroundColor: string;
wordBreak: string;
actionType: string;
url: string;
isEditing: boolean;
height: string;
width: string;
paddingLeft: string;
paddingRight: string;
paddingTop: string;
paddingBottom: string;
borderStyle: string;
borderColor: string;
borderWidth: string;
borderRadius: string;
boxShadow: string;
opacity: string;
position: string;
left: string;
top: string;
right: string;
tag: string;
}>;

declare interface PageData {
    props: {
        [key: string]: any;
    };
    setting: {
        [key: string]: any;
    };
    id?: number;
    title?: string;
    desc?: string;
    coverImg?: string;
    uuid?: string;
    latestPublishAt?: string;
    updatedAt?: string;
    isTemplate?: boolean;
    isHot?: boolean;
    isNew?: boolean;
    author?: string;
    status?: string;
}

export declare interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
    wordBreak: string;
}

export declare const textDefaultProps: TextComponentProps;

export declare const textStylePropNames: string[];

export { }
