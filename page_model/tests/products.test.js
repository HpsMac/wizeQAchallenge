import productsPage from '../pages/productsPage'
import loginPage from '../pages/loginPage'
import { CREDENTIALS } from '../data/constants'
import shoppingCartPage from '../pages/shoppingCartPage'

fixture('Products page functionality')
    .page `https://www.saucedemo.com/`

test('Users can log out from the products page', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t 
        .click(productsPage.hamburger)
        .click(productsPage.logoutButton)
    await t.expect(loginPage.loginButton.exists).ok()
})

test('Sort products by Price (low to high)', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t 
        .click(productsPage.sortDropdown)
        .click(productsPage.dropdownOption)
        .expect(productsPage.activeOption.textContent).eql('Price (low to high)')
})

test('Users can navigate to the Shopping Cart from the Products page', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
        .click(productsPage.shoppingCart)
    await t.expect(shoppingCartPage.cartHeader.innerText).eql('YOUR CART')
})

// test.skip('Users can add single item to cart', async t => {
//     await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
//     await t
//         .click(productsPage.item1Button)
//         .expect(productsPage.itemCounter.exists).ok()
// })

test('Users can add multiple items to cart', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
        .click(productsPage.item1Button)
        .click(productsPage.item2Button)
        .click(productsPage.item3Button)
        .expect(productsPage.itemCounter.innerText).eql('3')
})

test('Add Onesie to cart', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
        .click(productsPage.onesieButton)
        .expect(productsPage.onesieButton.innerText).eql('REMOVE')
})

