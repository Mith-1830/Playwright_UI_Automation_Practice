import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-15').scrollIntoViewIfNeeded();

})

test('Handling hover',async({page})=>{
    const hover = page.getByTestId('tooltip-trigger');
    await hover.hover();

    await expect(page.getByTestId('tooltip-bubble')).toHaveText('This is the tooltip text');
})