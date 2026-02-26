import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


  ///..
  test('should have a specific element', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect an element to be visible.
    const element = page.locator('text=Get Started');
    await expect(element).toBeVisible();
})
