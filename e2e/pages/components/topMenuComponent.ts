import { Page } from "@playwright/test";
import { ProductDetails } from "../../types";

export class TopMenuComponent {
  private readonly hamburgerMenu = this.page.getByLabel("Open Menu");
  private readonly menu = (menuName: string) => this.page.getByRole("link", { name: menuName });
  private readonly subMenu = (subMenuName: string) =>
    this.page.locator("#hmenu-content").getByRole("link", { name: subMenuName }).last();

  constructor(private readonly page: Page) {}

  async clickOnHamburgerMenu() {
    await this.hamburgerMenu.click();
  }

  async selectProduct(productDetails: ProductDetails) {
    await this.selectMenuItem(productDetails.menu);
    await this.selectSubMenuItems(productDetails.subMenu);
  }

  private async selectMenuItem(menuName: string) {
    await this.page.waitForTimeout(2000);
    await this.menu(menuName).click();
  }

  private async selectSubMenuItems(subMenuName: string) {
    await this.page.waitForTimeout(2000);
    await this.subMenu(subMenuName).click();
  }
}
