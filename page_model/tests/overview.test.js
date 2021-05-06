import productsPage from '../pages/productsPage'
import loginPage from '../pages/loginPage'
import { CREDENTIALS, MAILING } from '../data/constants'
import shoppingCartPage from '../pages/shoppingCartPage'
import checkoutPage from '../pages/checkoutPage'
import overviewPage from '../pages/overviewPage'
import finishPage from '../pages/finishPage'

fixture('Overview page functionality')
    .page `https://www.saucedemo.com/`

test('User can complete purchase, navigate to Finish', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
        .click(productsPage.item1Button)
        .click(productsPage.shoppingCart)
    await t
        .click(shoppingCartPage.checkoutButton)
    await t
        .typeText(checkoutPage.firstNameField,MAILING.FIRST_NAME)
        .typeText(checkoutPage.lastNameField,MAILING.LAST_NAME)
        .typeText(checkoutPage.postalField,MAILING.ZIP_CODE)
        .click(checkoutPage.continueButton)
    await t.click(overviewPage.finishButton)
    await t.expect(finishPage.finishHeader.innerText).eql('CHECKOUT: COMPLETE!')
})


// test.skip('Ordered items match Overview', async (t , n = 3) => {
//     t.ctx.itemCount = n;
//     await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
//     await t
//         .click(productsPage.item1Button)
//         .click(productsPage.item2Button)
//         .click(productsPage.item3Button)
//     t.ctx.itemCounter = await productsPage.itemCounter();
//     await t.click(productsPage.shoppingCart)
//     await t
//         .click(shoppingCartPage.checkoutButton)
//     await t
//         .typeText(checkoutPage.firstNameField,MAILING.FIRST_NAME)
//         .typeText(checkoutPage.lastNameField,MAILING.LAST_NAME)
//         .typeText(checkoutPage.postalField,MAILING.ZIP_CODE)
//         .click(checkoutPage.continueButton)
//     await t.expect(overviewPage.itemCount.count).eql(Number(t.ctx.itemCounter.textContent))
// })