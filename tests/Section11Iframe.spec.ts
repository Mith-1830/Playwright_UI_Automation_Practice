import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-11').scrollIntoViewIfNeeded();
})

test('Handlig Iframe',async({page})=>{
    const frame = page.frameLocator('[data-testid="practice-iframe"]');

    await expect(frame.locator('label[for="iframe-input"]'))
    .toHaveText('Inside iframe');

    await frame.locator('#iframe-input').fill('Mithun testing Iframe');
    await frame.locator('#iframe-btn').click();

    await expect(frame.locator('#iframe-result'))
    .toContainText('Iframe button clicked: Mithun testing Iframe');
})