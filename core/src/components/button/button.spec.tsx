import { newSpecPage } from "@stencil/core/testing";
import { SaButton } from "./button";

describe("sen-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SaButton],
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
