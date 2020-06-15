import { newE2EPage } from "@stencil/core/testing";

describe("sa-button", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<sa-button></sa-button>");

    const element = await page.find("sa-button");
    expect(element).toHaveClass("hydrated");
  });
});
