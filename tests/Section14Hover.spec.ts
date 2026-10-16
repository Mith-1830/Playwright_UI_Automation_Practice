import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-14').scrollIntoViewIfNeeded();

})


test('Handling hover',async({page})=>{
    const hoverElement = page.getByTestId('hover-menu-trigger');
    await hoverElement.hover();

    await expect(page.getByTestId('submenu-item-2')).toBeVisible();
})