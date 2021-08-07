export interface ComponentData {
    props: {
        [key: string]: any;
    };
    id: string;
    name: string;
    layerName?: string;
    isHidden?: boolean;
    isLocked?: boolean;
}
export interface PageData {
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
export interface CommonComponentProps {
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
    zIndex: string;
}
export declare const commonDefaultProps: CommonComponentProps;
export interface TextComponentProps extends CommonComponentProps {
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
export interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export declare const imageDefaultProps: ImageComponentProps;
export declare const textDefaultProps: TextComponentProps;
export declare type AllComponentProps = TextComponentProps & ImageComponentProps;
export declare const textStylePropNames: string[];
export declare const imageStylePropsNames: string[];
export declare const isEditingProp: {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const transformToComponentProps: <T extends {}>(props: T) => { [P in keyof T]: {
    type: StringConstructor;
    default: T[keyof T];
}; } & {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
