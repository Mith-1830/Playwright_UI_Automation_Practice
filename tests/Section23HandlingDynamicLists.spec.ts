import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-23').scrollIntoViewIfNeeded();

})

test('Handling dynamic lists',async({page})=>{
    await expect(page.getByTestId('list-add-btn')).toHaveText('Add');
    await page.getByTestId('list-input').fill('Orange');
    await page.getByTestId('list-add-btn').click();
    await expect(page.getByText('Orange')).toBeVisible();
    await page.getByTestId('list-remove-2').click();
    await expect(page.getByText('Orange')).not.toBeVisible();
})