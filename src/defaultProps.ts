import { mapValues, without } from 'lodash-es'
export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
  layerName?: string;
  isHidden?: boolean;
  isLocked?: boolean;
}

export interface PageData {
  props: { [key: string]: any };
  setting: { [key: string]: any };
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
  // actions
  actionType: string;
  url: string;
  isEditing: boolean;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
  zIndex: string;
}
export const commonDefaultProps: CommonComponentProps = {
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
  right: '0',
  zIndex: '0'
}
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

export const imageDefaultProps: ImageComponentProps = {
  src: 'test.url',
  ...commonDefaultProps,
  width: '373px'
}

export const textDefaultProps: TextComponentProps = {
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
  wordBreak: 'break-word',
  ...commonDefaultProps
}
export type AllComponentProps = TextComponentProps & ImageComponentProps
export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'src')
export const isEditingProp = {
  isEditing:{
    type: Boolean,
    default: false
  }
}
export const transformToComponentProps = <T extends {}>(props: T) => {
  const mapProps = mapValues(props, (item) => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item
    }
  })
  return {
    ...mapProps,
    ...isEditingProp
  }
}