import typescript from "rollup-plugin-typescript2"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import postcss from "rollup-plugin-postcss"
import autoprefixer from "autoprefixer"
import { terser } from "rollup-plugin-terser"
import packageJson from "./package.json"

const config = {
  input: "src/index.tsx",
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      exclude: ["src/stories/**"]
    }),
    postcss({
      modules: true,
      extract: false,
      minimize: true,
      plugins: [autoprefixer()]
    }),
    terser()
  ],
  output: {
    file: packageJson.main,
    format: "cjs",
    sourcemap: true
  }
}
export default config
