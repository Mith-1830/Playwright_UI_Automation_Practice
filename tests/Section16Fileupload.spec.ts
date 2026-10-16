import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-16').scrollIntoViewIfNeeded();

})

test('File upload',async({page})=>{

    await page.getByTestId('file-upload').setInputFiles('C:\\Users\\MITHUN\\git');
    await expect(page.getByTestId('file-upload-result')).toHaveText('git');
       

});