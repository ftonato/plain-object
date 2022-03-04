import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    format: "esm",
    file: "dist/main.js",
  },
  plugins: [typescript({ tsconfig: "tsconfig.json" }), terser()],
};
