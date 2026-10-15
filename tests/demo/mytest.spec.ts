import { test, expect } from '@playwright/test'

test("test", async ({ page }) => {
    // 1. Go to the homepage
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    // 2. Click on the Make Appoinment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();
    // 3. Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button").click()
    // 4. Assert
    await expect(page.getByText("Make Appointment")).toBeVisible

})

test("Should do something", async ({ }) => {

})