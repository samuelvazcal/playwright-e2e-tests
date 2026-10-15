import { test, expect } from '@playwright/test'

test("Should login successfully", async ({ page }) => {
    // 1. Launch URL and assert title and header
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    // 1.a Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service")
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
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

test("Should prevent login with wrong creds", async ({ page }) => {
    // 1. Launch URL and assert title and header
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    // 1.a Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service")
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
    // 2. Click on the Make Appoinment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();
    // 3. Login
    await page.getByLabel("Username").fill("Michael Scott");
    await page.getByLabel("Password").fill("ThisIsNotAPassword?");
    await page.getByRole("button").click()

    // 4. Assert
    await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

})