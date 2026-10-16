import{test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-9').scrollIntoViewIfNeeded();
})

test('Handling Show Alert', async({page})=>{

    page.on('dialog',async(dialog)=>{
        console.log('Alert message:',dialog.message());
        await dialog.accept();
    });
    await page.getByTestId('alert-btn').click();

    await expect(page.getByTestId('alert-result')).toHaveText('Alert was shown and dismissed');

});

test('Handling Confirm alert',async({page})=>{
   page.on('dialog',async(dialog)=>{
     await dialog.accept();
   });

   await page.getByTestId('confirm-btn').click();

   await expect(page.getByTestId('alert-result')).toHaveText('Confirm result: OK')
})

test('handling Alert prompt', async({page})=>{
    page.on('dialog',async(dialog)=>{
        await dialog.accept('Mithun');
    })

    await page.getByTestId('prompt-btn').click();

    await expect(page.getByTestId('alert-result')).toContainText('Mithun');

})