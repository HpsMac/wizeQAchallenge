import { Selector , t } from 'testcafe'

class checkoutPage{
    constructor(){
        this.firstNameField= Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector('.error-button')
    }
}

export default new checkoutPage()