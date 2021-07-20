<template>
  <component :is="tag" :style="styleProps" @click="handleClick" class="k-text-component">
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '../../hooks/useComponentCommon'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '../../defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps) 
export default defineComponent({
    name: 'KText',
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      ...defaultProps,
    },
    setup(props){
      const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
      return {
        styleProps,
        handleClick
      }
    }
})
</script>

<style lang="less">
  .k-text-component {
    position: relative !important;
  }
</style>