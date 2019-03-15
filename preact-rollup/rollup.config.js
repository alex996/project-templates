import copy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const dist = 'dist'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index',
  output: {
    file: `${dist}/bundle.js`,
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    copy({
      'index.html': `${dist}/index.html`
    }),
    serve({
      open: true,
      port: 3000,
      contentBase: dist,
      historyApiFallback: true
    }),
    livereload({
      watch: dist
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: `${dist}/styles.css`,
      minimize: production
    }),
    production && terser()
  ]
}
