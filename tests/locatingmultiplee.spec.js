import{test,expect} from '@playwright/test'

test('multiple elements',async({page})=>{
  //await page.goto('https://www.myntra.com/');
    await page.goto('https://timesofindia.indiatimes.com/');
    const links=await page.$$('a');

    for(const link of links){
        const linkText=await link.textContent();
        console.log(linkText)
    }
})