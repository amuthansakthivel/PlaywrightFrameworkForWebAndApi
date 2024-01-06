import {expect, Page} from "@playwright/test";

export class AddToCartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnAddToCart() {
        await this.page.getByRole('button', {name: 'Add to Cart'}).click();
    }

    async verifyProductAddedToCart() {
        await expect(this.page.locator('#NATC_SMART_WAGON_CONF_MSG_SUCCESS')
            .getByText('Added to Cart'))
            .toBeVisible();
    }
}

