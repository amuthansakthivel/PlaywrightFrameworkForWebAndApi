import { Page } from "@playwright/test";
import { AddToCartPage } from "./addToCartPage";
import { TopMenuComponent } from "./components";
import { Brands, Product } from "../types";

export class HomePage {
  private readonly topMenuComponent: TopMenuComponent;
  private readonly filterByBrandName = (brandName: Brands) => this.page.getByRole("link", { name: brandName });
  private readonly clickOnProduct = (productName: Product) => this.page.getByRole("link", { name: productName });

  constructor(private readonly page: Page) {
    this.topMenuComponent = new TopMenuComponent(page);
  }

  getTopMenuComponent() {
    return this.topMenuComponent;
  }

  async filterByBrand(brandName: Brands) {
    await this.filterByBrandName(brandName).last().click();
  }

  async selectProduct(productName: Product) {
    const [page1] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.clickOnProduct(productName).first().click(),
    ]);
    return new AddToCartPage(page1);
  }
}
