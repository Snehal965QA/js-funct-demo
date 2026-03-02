//create simple test

import { test, expect } from '@playwright/test'

test('homepage', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    const title = await page.title();
    console.log('page title ', title);

    await expect(page).toHaveURL('https://www.demoblaze.com/');
    const pageurl = page.url();
    console.log('url of page: ',pageurl);
    await expect(page).toHaveTitle('STORE');
})