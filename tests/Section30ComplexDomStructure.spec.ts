import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');

    await page.locator('#section-30').scrollIntoViewIfNeeded();
});

test('Handling Complex DOM Structure', async ({ page }) => {

    const child1 = page.locator(
        '//section[@id="dom-grandparent"]//article[@id="dom-parent-1"]//div[@id="dom-child-1a"]'
    );

    const child2 = page.locator(
        '//section[@id="dom-grandparent"]//article[@id="dom-parent-1"]//div[@id="dom-child-1b"]'
    );

     const parent2 = page.locator(
        '//article[@id="dom-parent-2"]'
    );

    await expect(child1).toHaveText('child 1aleaf 1a');
    await expect(child2).toHaveText('child 1bleaf 1b');
    await expect(parent2).toContainText('parent 2 (sibling)');

     await expect(page.getByTestId('dom-li-1')).toContainText('list leaf 1');
     await expect(page.getByTestId('dom-li-2')).toContainText('list leaf 2');
     await expect(page.getByTestId('dom-li-3')).toContainText('list leaf 3');
});