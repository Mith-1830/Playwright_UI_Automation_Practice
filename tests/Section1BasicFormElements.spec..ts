import {test , expect} from '@playwright/test';

test('exploring locators',async ({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice')

    await page.getByTestId('text-input').fill('Mithun')
    await page.getByPlaceholder('Enter password').fill('123456')
    await page.getByTestId('email-input').fill('mithun@example.com')
    await page.getByTestId('phone-input').fill('1234567890')
    await page.getByPlaceholder('Tell us about yourself').fill('I am a software tester')

    await page.getByTestId('form-submit').click()

    await expect(page.getByTestId('form-result')).toHaveText('Form submitted successfully')

    await page.getByTestId('form-reset').click()
   
})  