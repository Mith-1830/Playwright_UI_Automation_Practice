import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-13').scrollIntoViewIfNeeded();

})

test('Handling drag and drop',async({page})=>{

    await expect(page.locator('#drag-source')).toHaveText('Drag me');

    const dragelement = page.locator('#drag-source');

    const dropelement = page.locator('#drop-zone');

    //await dragelement.dragTo(dropelement);
    await dragelement.hover();
    await page.mouse.down();
    await dropelement.hover();
    await page.mouse.up();

    await expect(page.getByTestId('drop-result')).toHaveText('Item dropped successfully');
});

