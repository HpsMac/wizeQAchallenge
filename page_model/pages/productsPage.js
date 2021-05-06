import { Selector , t } from 'testcafe'

class productsPage{
    constructor(){
        this.title = Selector('.header_secondary_container .title')
        this.hamburger = Selector('#react-burger-menu-btn')
        this.sortDropdown = Selector('.product_sort_container')
        this.dropdownOption = Selector('.product_sort_container').child('option').withAttribute('value' ,'lohi')
        this.activeOption = Selector('.active_option')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('.shopping_cart_link')
        this.onesieButton = Selector('.inventory_item_name').withText("Sauce Labs Onesie").parent('div').nextSibling('div').find('button') // inventory_item con .inventory_item_name "Sauce Labs Onesie"
        this.item1Button = Selector('.inventory_item:nth-of-type(1)').find('button')
        this.item2Button = Selector('.inventory_item:nth-of-type(2)').find('button')
        this.item3Button = Selector('.inventory_item:nth-of-type(3)').find('button')
        this.itemCounter = Selector('.shopping_cart_badge')
    }
}

export default new productsPage()