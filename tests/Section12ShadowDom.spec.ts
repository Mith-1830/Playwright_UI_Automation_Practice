import{test,expect}from'@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("https://www.sreenidhirajakrishnan.com/practice");
    await page.locator('#section-12').scrollIntoViewIfNeeded();
})

test('Handling shadowDOM',async({page})=>{

    await expect (page.locator('label[for="shadow-input"]')).toHaveText('Shadow DOM input');

    await page.locator('input[id="shadow-input"]').fill('Mithun testing shadow DOM');

    await page.locator('button[id="shadow-btn"]').click();

    await expect(page.locator('#shadow-result')).toContainText('Submitted: Mithun testing shadow DOM');
})