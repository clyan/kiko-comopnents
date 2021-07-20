import { textDefaultProps } from '@/defaultProps';
import { VueWrapper , shallowMount } from '@vue/test-utils'
import KText from '../../src/components/KText/index';
let wrapper: VueWrapper<any>

describe('KText Component', ()=>{
  const { location } = window
  beforeEach((): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      delete window.location;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.location = {
          href: '',
      }
  })
  afterEach((): void => {
      window.location = location;
  })
  it("正确的ui展示", ()=> {
    const msg = 'hello'
    const props = {
      ...textDefaultProps,
      text:msg
    }
    wrapper = shallowMount(KText, { props })
    // 正确的显示text
    expect(wrapper.text()).toBe(msg)
    // 正确的标签
    expect(wrapper.element.tagName).toBe('DIV')
    // 正确的style 
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    // 未包含的style
    expect(style.includes('actionType')).toBeFalsy()
  })
  it("非编辑器中跳转生效", ()=> {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: "http://baidu.com",
      tag: 'div',
    }
    wrapper = shallowMount(KText, { props })
    // should be h2
    expect(wrapper.element.tagName).toBe('DIV')
    // trigger the element
    wrapper.trigger('click')
    expect(window.location.href).toBe(props.url)
  })

  it("编辑器中跳转不生效", ()=> {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: "http://baidu.com",
      tag: 'div',
      isEditing: true
    }
    wrapper = shallowMount(KText, { props })
        // should be h2
        expect(wrapper.element.tagName).toBe('DIV')
        // trigger the element
        wrapper.trigger('click')
        expect(window.location.href).not.toBe(props.url)

  })
})