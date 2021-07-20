import vuePlugin from 'rollup-plugin-vue'
import less from 'rollup-plugin-less';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { name } from '../package.json';
const file = type => `dist/${name}.${type}.js`
export { file, name }
const overrides  = {
  compilerOptions : {
    declaration: true
  },
  exclude: [
    'node_modules',
  ]
}
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins:[
    nodeResolve(),
    typescript({
      tsconfigOverride: overrides 
    }),
    vuePlugin(),
    less({
      output: "./dist/index.css"
    }),
  ],
  external: ['vue', 'lodash-es']
}