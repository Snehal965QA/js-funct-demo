import { test, expect } from '@playwright/test'
test('homepage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    const PageTitle=await page.title();
    console.log('the page title is ',PageTitle);
   await expect(page).toHaveTitle('STORE');

   const pageURL= await page.url();
   console.log('the page url is: ',pageURL);

   await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    page.close();
})