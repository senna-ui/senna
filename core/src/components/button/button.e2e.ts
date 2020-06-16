import { newE2EPage } from "@stencil/core/testing";

describe("sen-button", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<sen-button></sen-button>");

    const element = await page.find("sen-button");
    expect(element).toHaveClass("hydrated");
  });
});
