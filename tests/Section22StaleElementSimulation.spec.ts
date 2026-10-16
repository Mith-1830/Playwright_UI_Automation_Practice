import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-22').scrollIntoViewIfNeeded();

})

test('Handling StaleElement Reference Exception',async({page})=>{
    await expect(page.getByTestId('stale-target')).toHaveText('Stale target instance #0');
    for(let i=0;i<=5;i++){
    await page.getByTestId('stale-refresh-btn').click();
    await expect(page.getByTestId('stale-refresh-btn')).toHaveText('Replace Element');
    }
    await expect(page.getByTestId('stale-target')).toHaveText('Stale target instance #6');

})