import { Selector } from 'testcafe';

class shoppingCartPage {
    constructor(){
        this.cartHeader = Selector('.title')
        this.checkoutButton = Selector('.checkout_button') 
    }
}

export default new shoppingCartPage();