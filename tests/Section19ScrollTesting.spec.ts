import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-19').scrollIntoViewIfNeeded();

})

test('Hidden elements',async({page})=>{
    await expect(page.getByTestId('scroll-spacer')).toContainText('Tall spacer. Scroll down to reach the target at the bottom.');
    await page.getByTestId('scroll-target').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('scroll-target')).toContainText('You scrolled to me');
})