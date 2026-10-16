import {test , expect } from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('#section-6').scrollIntoViewIfNeeded();
})

test('Locating Dynamic Elements',async({page})=>{
    await expect(page.getByText('Click to make me disappear')).toBeVisible();
    await page.getByTestId('disappear-btn').click();
    await expect(page.getByText('Click to make me disappear')).toBeHidden();
    await expect(page.getByRole('button',{name : "Change Text"})).toBeVisible();
    await page.getByRole('button',{name : "Change Text"}).click();
    await expect(page.getByTestId('changing-text')).toHaveText('Text has changed!');
})

test('Counter Elements',async({page})=>{
    const counter = page.getByTestId('increment-btn');

    await expect(counter).toBeVisible();

    await expect(page.getByTestId('counter-result')).toHaveText('Counter: 0');

    for(let i = 0 ; i < 3 ; i++)
        await counter.click();
    await expect(page.getByTestId('counter-result')).toHaveText('Counter: 3');
})

test('Load content',async ({page})=>{
    await expect(page.getByTestId('load-content-btn')).toBeVisible();
    await page.getByTestId('load-content-btn').click();

})