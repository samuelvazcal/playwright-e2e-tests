import { test, expect } from '@playwright/test';

test.describe("Make Appointment", () => {
    test.beforeEach("Login with valid code", async ({ page }) => {
        // 1. Launch page
        await page.goto("https://katalon-demo-cura.herokuapp.com/")
        await expect(page).toHaveTitle("CURA Healthcare Service")
        await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")

        /**
         * Elememnt: button, link
         * 
         * @actions
         * 1. ✅ click
         * 2. ✅ press
         * 3. ✅ double click
         * 4. ✅ right click
         * 5. ✅ hover if link
         * 6 (optional) timeout if slow
         */
        // 2. Click on the make appointment
        // await page.getByRole("link", { name: "Make Appointment" }).click();
        //await page.getByRole("link", { name: "Make Appointment" }).press("Enter")
        //await page.getByRole("link", { name: "Make Appointment" }).dblclick()
        //await page.getByRole("link", { name: "Make Appointment" }).click({ button: "right" })
        await page.getByRole("link", { name: "Make Appointment" }).hover()




        await expect(page.getByText("Please login to make")).toBeVisible();
        // 3. Successful login
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button").click()
        // 4. Assert a text
        expect(page.getByText("Make Appointment")).toBeVisible

    })

    test("Should make an apppointment with non-default values", async ({ page }) => {

    })

    test('Should make an appointment with non-default values', async ({ page }) => {
        // Dropdown
        await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
        // Checkbox
        await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
        // Radio button
        await page.getByText('Medicaid').click();
        // Date input box
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill('25/10/1993');
        await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
        // Multiline comments input box
        await page.getByRole('textbox', { name: 'Comment' }).click();
        await page.getByRole('textbox', { name: 'Comment' }).fill('Hello world!');
        // Button
        await page.getByRole('button', { name: 'Book Appointment' }).click();
        // Assertion
        await expect(page.locator('h2')).toContainText('Appointment Confirmation');
        await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
    });

    // More tests goes here
})

