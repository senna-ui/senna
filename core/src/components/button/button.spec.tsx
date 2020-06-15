import { newSpecPage } from "@stencil/core/testing";
import { SaButton } from "./button";

describe("sa-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SaButton],
      html: `<sa-button></sa-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sa-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sa-button>
    `);
  });
});
