import {test , expect}from'@playwright/test';
test.beforeEach(async ({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice')
    await page.locator('#section-8').scrollIntoViewIfNeeded();
})

test('Filter By table', async ({page})=>{
    await page.getByTestId('table-search').fill('Bharath')
    await expect(page.getByTestId('page-indicator')).toHaveText('Page 1 of 1');

   const rows = page.locator('[data-testid="table-body"] tr');
   await expect(rows).toHaveCount(1);

   await expect(rows.first()).toContainText('Bharath')
});

test('Sort table by asc and desc', async ({page})=>{
    
    await expect(page.getByText('Sort Name (asc)')).toBeVisible();

    await page.getByTestId('sort-name-btn').click();
    await expect(page.locator('//tbody[@data-testid="table-body"]//tr[@data-testid="row-harish"]')).toHaveText('HarishDevOpsPlatform15,50,000');
 
    await page.getByTestId('sort-name-btn').click();
    await expect(page.locator('//tbody[@data-testid="table-body"]//tr[@data-testid="row-anita"]')).toHaveText('AnitaQASDET12,00,000');

});

test('next page button ' , async ({page})=>{

    await page.getByTestId('next-page-btn').click();
    await expect(page.getByTestId('page-indicator')).toHaveText('Page 2 of 3');

    await page.getByTestId('prev-page-btn').click();
    await expect(page.getByTestId('page-indicator')).toHaveText('Page 1 of 3');

})





