import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.js",
    output: [
      {
        file: "main.js",
        format: "esm",
        plugins: [terser()],
      },
    ],
  },
];
