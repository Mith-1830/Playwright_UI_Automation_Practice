import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-18').scrollIntoViewIfNeeded();

})

test('Hidden elements',async({page})=>{
    await expect(page.getByTestId('reveal-btn')).toHaveText('Reveal Hidden Element');
    await page.getByTestId('reveal-btn').click();
    await expect(page.getByTestId('revealed-element')).toContainText('Previously hidden element is now visible!');

   // await page.getByTestId('css-hidden-btn').click();
    //await expect(page.getByTestId('css-hidden-btn')).not.toBeVisible();
})