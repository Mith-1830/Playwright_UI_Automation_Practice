import {test , expect} from '@playwright/test';
test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-7').scrollIntoViewIfNeeded();      
});

test('Wait for Element to be visible',async({page})=>{
    await expect(page.getByTestId('loaded-message')).toHaveText('Loaded');
    await expect(page.getByTestId('delayed-text')).toHaveText('Delayed text appeared');
})

test('Wait for the progress bar to complete', async({page})=>{
    await expect(page.getByTestId('progress-result')).toHaveText('100%');
})

test('AJAX response appear after clicking send ' , async({page})=>{
    await page.getByTestId('ajax-btn').click();
    await expect(page.getByTestId('ajax-result')).toHaveText('AJAX result received');
})
