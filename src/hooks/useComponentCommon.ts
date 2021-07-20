import { CommonComponentProps } from './../defaultProps';
import { pick } from 'lodash-es'
import {  computed } from 'vue'
const useComponentCommon = (props: Readonly<Partial<CommonComponentProps>>, picks: Array<string>) => {
  const  styleProps = computed(() => pick(props, picks))
  const handleClick = ()=> {
    if(props.actionType === 'url' && props.url && !props.isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}
export default useComponentCommon;