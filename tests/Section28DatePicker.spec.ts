import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-28').scrollIntoViewIfNeeded();

})

test('Handling Date Picker',async({page})=>{
    await page.locator('#date-input').fill('2003-07-30');

    await expect(page.getByTestId('date-result'))
    .toHaveText('Chosen date: 2003-07-30');

})