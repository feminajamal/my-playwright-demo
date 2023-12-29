import { Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async testingAuthentication(email: string, password: string){
        await this.page.locator('#menu-item-1311').click()
        await this.page.locator('[name="xoo-el-username"]').fill(email)
        await this.page.locator('[name="xoo-el-password"]').fill(password)
        await this.page.getByText('Sign in').click()

        //const text = await this.page.locator('#menu-item-1314').textContent()
    }
}