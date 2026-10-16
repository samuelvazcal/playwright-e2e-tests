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

test("Should do something", { tag: "@smoke" }, async ({ page }, testInfo) => {
    // steps...
    await page.locator("//h1").click()
})

test.only("Should demo locators", async ({ page }) => {
    // ✅ 'page.getBy*() and 'page.locator()' method returns the `locator` object
    // ✅ the above methods not to be 'awaited'
    // ✅ the type of locator is an 'object'
    // Locators are LAZY until an action is fired on them

    // 1. Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/")

    // 2. Click on the Make Appointment
    let makeAppointment = page.getByRole("link", { name: "Make Appointment" })
    console.log(`>> The type of locator: ${typeof makeAppointment}, the value of the locator is: ${JSON.stringify(makeAppointment)}`);
    //await makeAppointment.click();
    //await expect(page.getByText("Please login to make")).toBeVisible();
    await page.getByRole('heading', { name: 'We Care About Your Health' }).click()
})