// import productsPage from '../pages/productsPage'
// import loginPage from '../pages/loginPage'
// import { CREDENTIALS, MAILING } from '../data/constants'
// import shoppingCartPage from '../pages/shoppingCartPage'
// import checkoutPage from '../pages/checkoutPage'
// import overviewPage from '../pages/overviewPage'

// fixture('Checkout page functionality')
//     .page `https://www.saucedemo.com/`

// test.skip('Users can CHECKOUT from shopping cart', async t => {
//     await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
//     await t
//         .click(productsPage.item1Button)
//         .click(productsPage.shoppingCart)
//     await t
//         .click(shoppingCartPage.checkoutButton)
//     await t.expect(checkoutPage.firstNameField.exists).ok()
        
// })

// test.skip('Mailing information can not be empty', async t => {
//     await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
//     await t
//         .click(productsPage.item1Button)
//         .click(productsPage.shoppingCart)
//     await t
//         .click(shoppingCartPage.checkoutButton)
//     await t
//         .click(checkoutPage.continueButton)
//         .expect(checkoutPage.errorMessage.exists).ok()        
// })

// test.skip('User can checkout to overview page', async t => {
//     await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
//     await t
//         .click(productsPage.item1Button)
//         .click(productsPage.shoppingCart)
//     await t
//         .click(shoppingCartPage.checkoutButton)
//     await t
//         .typeText(checkoutPage.firstNameField,MAILING.FIRST_NAME)
//         .typeText(checkoutPage.lastNameField,MAILING.LAST_NAME)
//         .typeText(checkoutPage.postalField,MAILING.ZIP_CODE)
//         .click(checkoutPage.continueButton)
//         .expect(overviewPage.overviewHeader.exists).ok()        
// })