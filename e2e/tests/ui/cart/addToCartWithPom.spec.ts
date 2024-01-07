import { test } from "@playwright/test";
import { HomePage } from "../../../pages";
import { Env } from "../../../helpers";

test.describe("Add to cart using POM", () => {
  test("should add product to cart using pom", async ({ page }) => {
    await page.goto(Env.BASE_URL);
    const homePage = new HomePage(page);
    await homePage.getTopMenuComponent().clickOnHamburgerMenu();
    await homePage.getTopMenuComponent().selectProduct({
      menu: "Mobiles, Computers",
      subMenu: "Laptops",
    });

    await homePage.filterByBrand("Apple Apple");
    const productPage = await homePage.selectProduct("Apple MacBook Air Laptop M1");
    await productPage.clickOnAddToCart();
    await productPage.verifyProductAddedToCart();
  });
});
