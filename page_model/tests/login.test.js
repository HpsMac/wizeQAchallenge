import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

import { CREDENTIALS } from '../data/constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('User can login using valid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(productsPage.title.textContent).eql('Products')
})

test('User can NOT login using invalid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.exists).ok()
})