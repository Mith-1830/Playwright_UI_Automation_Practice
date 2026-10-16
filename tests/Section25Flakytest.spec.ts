import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-25').scrollIntoViewIfNeeded();

})

test('Handling flaky tests', async ({ page }) => {
    await expect(page.getByTestId('flaky-btn')).toHaveText('Run Flaky Action');
    await expect(page.getByTestId('flaky-result')).toHaveText('Not run yet');
    await page.getByTestId('flaky-btn').click();
    const result = await page.getByTestId('flaky-result').textContent();
    console.log('Flaky test result is :',result);
    

})