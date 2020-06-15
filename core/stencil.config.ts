import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "Senna",
  taskQueue: "async",
  plugins: [
    sass({
      injectGlobalPaths: ["src/scss/global"],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@senna-ui/core',
      proxiesFile: "../packages/react/src/components.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
