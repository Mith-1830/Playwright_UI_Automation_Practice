import {test , expect} from '@playwright/test';

test.beforeEach (async ({page})=>{

    await page.goto('https://www.sreenidhirajakrishnan.com/practice')
    await page.locator('#section-4').scrollIntoViewIfNeeded();
})

//TEST 1 

test('selecting the color from the Dropdown', async ({page})=>{

    await page.locator('#standard-select').first().selectOption('Green');
    await expect(page.locator('#section-4')).toContainText('Selected: Green');
 });

test('Exploring multi select', async ({page})=>{

    await page.locator('#multi-select').selectOption(['java', 'python']);
    await expect(page.locator('#section-4')).toContainText('Selected: java, python');
})

test('Dynamic Dropdown', async ({page})=>{

    await page.locator('#dynamic-select').selectOption('Playwright');
    await expect(page.getByText('Selected: Playwright')).toBeVisible();
})

test('Custom Dropdown',async({page})=>{
    await page.getByTestId("custom-dropdown-toggle").click();
    await page.getByText('Alpha').click();
    await expect(page.getByText('Selected: Alpha')).toBeVisible();
})

