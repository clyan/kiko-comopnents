import baseConfig, { name, file }  from './rollup.config'
export default {
  ...baseConfig,
  output: {
    name: 'KikoComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  },
}