import{test , expect} from '@playwright/test';

test.beforeEach(async ({page})=>{

    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-5').scrollIntoViewIfNeeded();
})

test('Locating Element by ID',async({page})=>{
    await expect(page.locator('#locator-by-id')).toBeVisible();
    await expect(page.locator('#locator-by-id')).toHaveText('Find me by id');
})

test('Locating Element by Class',async({page})=>{
    await expect(page.locator('.locator-by-class')).toBeVisible();
    await expect(page.locator('.locator-by-class')).toContainText('Find me by class');
})

test('Locating Element by Name',async({page})=>{
    await expect(page.locator('[name="locator-name"]')).toBeVisible();
    await expect(page.getByPlaceholder('find by name attribute')).toBeVisible();
    await page.locator('[name="locator-name"]').fill('Locating by Name');
    await expect(page.locator('[name="locator-name"]')).toHaveValue('Locating by Name');
})

test('Locating Element by data-testid',async({page})=>{
    await expect(page.getByTestId('locator-by-testid')).toBeVisible();
    await expect(page.getByTestId('locator-by-testid')).toHaveText('Find me by data-testid');
})

test('Locating Element by area-label',async({page})=>{
    await expect(page.getByLabel('locator-by-aria')).toBeVisible();
    await expect(page.getByLabel('locator-by-aria')).toHaveText('Find me by aria-label');
})

test('Locating Element by Placeholder',async({page})=>{
    await expect(page.getByPlaceholder('locator-by-placeholder')).toBeVisible();
    await page.getByPlaceholder('locator-by-placeholder').fill('Is this a placeholder?');
})

test('locating Element by exact text',async ({page})=>{
    await expect(page.getByText('ExactTextTarget',{exact : true})).toBeVisible();
})

test('Locating Element by Partial Text',async({page})=>{
    await expect(page.getByText('This contains')).toBeVisible();
})

test('Locating Element by Css Selector',async({page})=>{
    await expect(page.locator('[data-css="css-only-target"]')).toBeVisible();
    await expect(page.locator('[data-css="css-only-target"]')).toContainText('Reachable only via');
})

test('Locating Element by XPath',async({page})=>{
    const grandparent = page.locator('//div[@id="xpath-grandparent"]');
    await expect(grandparent).toBeVisible();
    await expect(grandparent).toContainText('grandparent');

    const parent = page.locator('//div[@id="xpath-grandparent"]//div[@id="xpath-parent"]');
    await expect(parent).toBeVisible();
    await expect(parent).toContainText('parent');

    const child1 = page.locator('//div[@id="xpath-child-1"]');
    await expect(child1).toBeVisible();
    await expect(child1).toContainText('child 1');

    const leaf = page.locator("//div[@id='xpath-child-2']//span[@id='xpath-leaf']");
    await expect(leaf).toContainText('leaf node');

   
})
