import { test, expect } from '@playwright/test'

test('locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    // click on login button
    await page.locator('#login2').click();

    //username
    await page.locator('#loginusername').fill('pavanol');

    //password
    await page.fill('#loginpassword', 'test@123');

    //click on login button
    await page.click("//button[text()='Log in']");

    //verify logout link presence
    await page.getByText('Log out',{expect:true}); //inbuilt locator
   // const logOutLink = await page.locator('//a[@onclick="logOut()"]');
   // await expect(logOutLink).toBeVisible();
    console.log('log out button is visible');
})
