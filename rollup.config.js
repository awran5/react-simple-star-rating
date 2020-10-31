import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  plugins: [typescript(), nodeResolve(), commonjs, image(), terser()],
  external: Object.keys(pkg.peerDependencies || {}),
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true
  }
}
