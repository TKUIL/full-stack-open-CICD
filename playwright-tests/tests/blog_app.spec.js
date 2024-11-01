const { test, expect, beforeEach, describe } = require('@playwright/test')
const { resetDatabase, login, createBlog, likeTimes } = require('./helper')

describe('Note app', () => {
  beforeEach(async ({ page, request }) => {
    await resetDatabase(request)
    await page.goto('')
  })

  test('Login form is shown', async ({ page }) => {
    await expect(page.getByText('Username:')).toBeVisible({ timeout: 20000 }) 
    await expect(page.getByText('Password:')).toBeVisible({ timeout: 20000 }) 
  })


    test('fails with wrong credentials', async ({ page }) => {
      await page.getByTestId('username').fill('mluukkai')
      await page.getByTestId('password').fill('wrong')
      await page.getByRole('button', { name: 'Login' }).click()

      await expect(page.getByText('Wrong credentials')).toBeVisible({ timeout: 20000 })
      await expect(page.getByText('Matti Luukkainen logged in')).not.toBeVisible({ timeout: 20000 }) 
    })
  })

