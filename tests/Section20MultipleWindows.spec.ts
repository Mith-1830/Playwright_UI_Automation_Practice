import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-20').scrollIntoViewIfNeeded();

})

test('Multiple windows',async({page})=>{
    await expect(page.getByTestId('open-window-btn')).toHaveText('Open New Tab');
    const newtabPromise = page.context().waitForEvent('page');
    await page.getByTestId('open-window-btn').click();
    const newtab =await newtabPromise;
    await newtab.waitForLoadState();
    await expect(page.getByTestId('window-result')).toContainText('New window/tab opened');
    console.log('New tab url is :',newtab.url());

});