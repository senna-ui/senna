import { newSpecPage } from "@stencil/core/testing";

import { Button } from "./button";

describe("sen-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<sen-button></sen-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sen-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sen-button>
    `);
  });
});
