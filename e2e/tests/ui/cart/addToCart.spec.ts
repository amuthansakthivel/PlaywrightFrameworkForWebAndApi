import { expect, test } from "@playwright/test";
import { Env } from "../../../helpers";

test.describe("Add to cart", () => {
  test("should add product to cart", async ({ page }) => {
    await page.goto(Env.BASE_URL);
    await page.getByLabel("Open Menu").click();
    await page.getByRole("link", { name: "Mobiles, Computers" }).click();
    await page.locator("#hmenu-content").getByRole("link", { name: "Laptops" }).last().click();
    await page.getByRole("link", { name: "Apple Apple" }).click();
    const [page1] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Apple MacBook Air Laptop M1" }).first().click(),
    ]);
    await expect(page1.getByRole("heading", { name: "About this item" })).toBeVisible();
    await expect(page1.getByText("Powerful Performance – Take")).toBeVisible();
    await expect(page1.getByText("Superfast Memory – 8GB of")).toBeVisible();
    await page1.getByRole("button", { name: "Add to Cart" }).click();
    await expect(page.locator("#NATC_SMART_WAGON_CONF_MSG_SUCCESS").getByText("Added to Cart")).toBeVisible();
  });
});
