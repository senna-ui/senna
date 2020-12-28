import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

const iconPackages = {

}

export const config: Config = {
  namespace: "Senna",
  taskQueue: "async",
  globalStyle: "src/scss/senna.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/scss/globals"],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@senna-ui/core",
      proxiesFile: "../packages/react/src/components.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        {
          src: '../node_modules/material-design-icons/*/svg/production/*24px.svg', dest: './svg/',
          warn: true
        }
      ]
    },
    {
      type: "docs-readme",
    },
    {
      type: "docs-json",
      file: "../packages/docs/core.json",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers,
      copy: [
        {
          src: '../node_modules/material-design-icons/*/svg/production/*24px.svg', dest: './build/svg/',
          warn: true
        }
      ]
    },
  ],
};
