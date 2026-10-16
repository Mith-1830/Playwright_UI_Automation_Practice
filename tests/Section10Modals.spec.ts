import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice')
    await page.locator('#section-10').scrollIntoViewIfNeeded();
})

test('handling Modals',async({page})=>{

    await expect(page.getByTestId('open-modal-btn')).toHaveText('Open Modal');
    await page.getByTestId('open-modal-btn').click();
    await expect(page.getByTestId('modal-box')).toBeVisible();
    await page.locator('//div[@data-testid="modal-overlay"]//div[@data-testid="modal-box"]//button[@data-testid="modal-x"]').click();
    await expect(page.getByTestId('modal-box')).toBeHidden();

})