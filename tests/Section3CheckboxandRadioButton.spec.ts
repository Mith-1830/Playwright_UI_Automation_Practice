import {test , expect} from '@playwright/test';

test('Exploring checkboxes and radio buttons', async ({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice')

    await page.getByTestId('select-all').check();

    await page.getByTestId('check-a').check();

    await expect(page.getByTestId('check-a')).toBeChecked();

    await page.getByTestId('radio-1').check();

    await page.getByTestId('reveal-checkbox').check();

    await expect(page.getByTestId('reveal-checkbox')).toBeChecked();

    await expect(page.getByText('Hidden text is now visible!')).toBeVisible(); 


    const checkboxes = ['check-a' , 'check-b'];

    for(const checkbox of checkboxes){
        await page.getByTestId(checkbox).check();
        await expect(page.getByTestId(checkbox)).toBeChecked();
    }

});