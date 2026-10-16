import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-21').scrollIntoViewIfNeeded();

})

test('authentication simulation', async ({ page }) => {
    await page.getByTestId('auth-username').fill('admin');
    await page.getByTestId('auth-password').fill('admin123')
    await expect(page.getByTestId('auth-login-btn')).toHaveText('Login');
    await page.getByTestId('auth-login-btn').click();

    await expect(page.getByTestId('auth-dashboard')).toHaveText('Dashboard: login successful');

})