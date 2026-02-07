// packages/constants/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"], // add all files you want exported
  format: ["esm", "cjs"],               // dual ESM + CJS
  target: "es2022",
  dts: true,                            // generate .d.ts files
  sourcemap: true,
  clean: true,
  minify: false,                        // constants don't need minify
  splitting: false,
  treeshake: true,
  external: [],                         // nothing external
  noExternal: [
    "@repo/constants",
    "@repo/eslint-config",
    "@repo/typescript-config"
  ],                       // bundle nothing
  banner: {
    js: "// @repo/constants — shared constants",
  },
  esbuildOptions(options) {
    options.platform = "neutral";       // important for constants
  },
});