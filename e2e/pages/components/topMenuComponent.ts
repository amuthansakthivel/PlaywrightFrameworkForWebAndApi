import { Page } from "@playwright/test";
import { ProductDetails } from "../../types";

export class TopMenuComponent {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnHamburgerMenu() {
        await this.page.getByLabel('Open Menu').click()
    }

    async selectProduct(productDetails: ProductDetails) {
        await this.selectMenuItem(productDetails.menu);
        await this.selectSubMenuItems(productDetails.subMenu);
    }

    private async selectMenuItem(menuName: string) {
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('link', {name: menuName}).click();
    }

    private async selectSubMenuItems(subMenuName: string) {
        await this.page.waitForTimeout(2000);
        await this.page
            .locator("#hmenu-content")
            .getByRole('link', {name: subMenuName})
            .last()
            .click();
    }
}