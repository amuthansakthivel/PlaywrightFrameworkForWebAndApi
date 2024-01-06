import { Page } from "@playwright/test";
import { AddToCartPage } from "./addToCartPage";
import { TopMenuComponent } from "./components";
import {Brands, Product} from "../types";

export class HomePage {
    private readonly page: Page;
    private readonly topMenuComponent: TopMenuComponent;

    constructor(page: Page) {
        this.page = page;
        this.topMenuComponent = new TopMenuComponent(page);
    }

    getTopMenuComponent() {
        return this.topMenuComponent;
    }

    async filterByBrand(brandName: Brands) {
        await this.page
            .getByRole('link', {name: brandName})
            .click();
    }

    async selectProduct(productName: Product) {
        const [page1] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.getByRole('link', {name: productName}).first().click()
        ]);
        return new AddToCartPage(page1);
    }
}

