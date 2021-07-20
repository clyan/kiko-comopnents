module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [ // 忽略lodash-es,在测试UserProfile时遇到问题
    '/!node_modules\\/lodash-es/'
  ]
}
