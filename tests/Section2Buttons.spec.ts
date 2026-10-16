import{test , expect} from '@playwright/test';

test('Exploring buttons', async ({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice')

    await page.getByRole('button',{name : 'Single click button'}).click();
    await page.getByRole('button',{name : 'Double click button'}).dblclick();
    await page.getByRole('button',{name : 'Right click button'}).click({button : 'right'});
    await page.getByRole('button',{name : 'Start delay'}).click();
    await page.getByRole('button',{name : 'Relabel button'}).click();
    

    await expect(page.getByRole('button' , {name : 'Relabel button'})).toHaveText('Clicked Label');
    await expect(page.getByRole('button', { name: 'Delayed enable button' })).toBeEnabled({ timeout: 5000 });
    await expect(page.getByRole('button',{name : 'Disabled button'})).toBeDisabled();
    await expect(page.getByTestId('single-click-result')).toHaveText('Single clicked!')
    await expect(page.getByTestId('double-click-result')).toHaveText('Double clicked!')
    await expect(page.getByTestId('right-click-result')).toHaveText('Right click captured (context menu blocked)')
})