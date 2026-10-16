import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-17').scrollIntoViewIfNeeded();

})

test('File download',async({page})=>{
    await page.getByTestId('download-btn').click();
    await expect(page.getByTestId('download-result')).toHaveText('Download triggered: practice.txt');
})

