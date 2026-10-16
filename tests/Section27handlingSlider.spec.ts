import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-27').scrollIntoViewIfNeeded();

})

test('Handling Slider',async({page})=>{
    await expect(page.getByTestId('slider-result')).toHaveText('Value: 50');

    await page.getByTestId('slider-input').fill('75');
    await expect(page.getByTestId('slider-result')).toHaveText('Value: 75');
})