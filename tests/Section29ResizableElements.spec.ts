import{test,expect}from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-29').scrollIntoViewIfNeeded();

})

test('Handling Resizable Element',async({page})=>{
    await expect(page.getByTestId('resizable-box')).toHaveText('Drag my bottom-right corner to resize me.');
    const Box =  page.getByTestId('resizable-box').boundingBox();

    expect(Box).not.toBeNull();

    await page.mouse.move(
        Box.x + Box.width - 5, 
        Box.y + Box.height - 5
    );
        
        
    
    
})