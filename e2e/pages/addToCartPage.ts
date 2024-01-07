import { expect, Page } from "@playwright/test";

export class AddToCartPage {
  private readonly addToCartButton = this.page.getByRole("button", { name: "Add to Cart" });
  private readonly addedToCartConfirmationMessage = this.page
    .locator("#NATC_SMART_WAGON_CONF_MSG_SUCCESS")
    .getByText("Added to Cart");

  constructor(private readonly page: Page) {}

  async clickOnAddToCart() {
    await this.addToCartButton.click();
  }

  async verifyProductAddedToCart() {
    await expect(this.addedToCartConfirmationMessage).toBeVisible();
  }
}
