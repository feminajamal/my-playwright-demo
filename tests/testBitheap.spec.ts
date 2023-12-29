import {expect, test} from '@playwright/test'
import { Page } from '@playwright/test';
import { LoginPage } from "../Pages/LoginPage.ts";
//import { text } from 'stream/consumers';

test.beforeEach(async ({page}) => {
    await page.goto('https://bitheap.tech')
})

test('loginTest', async({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.testingAuthentication('playwright', 'playwright')

    //expect(text, 'Hello, Playwright')
})
