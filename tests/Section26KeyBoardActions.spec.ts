import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-26').scrollIntoViewIfNeeded();

})

test('Keyboard actions',async({page})=>{
    await page.getByTestId('keyboard-input').fill('Hello');
    await page.getByTestId('keyboard-input').press('ArrowLeft');
    await expect(page.getByTestId('keyboard-input')).toHaveValue('Hello');
    await page.getByTestId('keyboard-input').press('ArrowRight');
    await page.getByTestId('keyboard-input').press('Backspace');
    await page.getByTestId('keyboard-input').press('ArrowUp');
    await expect(page.getByTestId('arrow-counter')).toHaveText('Arrow counter: 1');
    await expect(page.getByTestId('keyboard-input')).toHaveValue('Hell');
    await page.getByTestId('keyboard-input').press('ArrowDown');
    await expect(page.getByTestId('arrow-counter')).toHaveText('Arrow counter: 0');
});