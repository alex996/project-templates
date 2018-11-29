import copy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

const dir = 'dist'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index',
  output: {
    dir,
    file: 'bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    copy({
      'index.html': `${dir}/index.html`
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: `${dir}/styles.css`,
      minimize: production
    }),
    production && terser()
  ]
}
