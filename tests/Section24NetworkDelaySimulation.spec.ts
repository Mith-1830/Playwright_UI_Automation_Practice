import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-24').scrollIntoViewIfNeeded();

})

test('Handling Network delay',async({page})=>{
    await expect(page.getByTestId('network-btn')).toHaveText('Fetch with Delay');
    await expect(page.getByTestId('network-result')).toHaveText('Idle');

    await page.getByTestId('network-btn').click();
    await expect(page.getByTestId('network-result'))
    .not.toHaveText('Idle');

    await expect(page.getByTestId('network-result')).toHaveText('Response received');
})