import { test, expect } from '@playwright/test'

test.describe("Login functionality", () => {
    test.beforeEach("Go to the login page", async ({ page }) => {
        await page.goto("https://katalon-demo-cura.herokuapp.com/")
        await expect(page).toHaveTitle("CURA Healthcare Service")
        await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await expect(page.getByText("Please login to make")).toBeVisible();
    })

    test("Should login successfully", async ({ page }) => {
        // Successful login
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button").click()
        // 4. Assert
        expect(page.getByText("Make Appointment")).toBeVisible

    })

    test("Should prevent login with wrong creds", async ({ page }) => {
        // Unsuccsessful login
        await page.getByLabel("Username").fill("Michael Scott");
        await page.getByLabel("Password").fill("ThisIsNotAPassword?");
        await page.getByRole("button").click()

        // 4. Assert
        await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

    })
})