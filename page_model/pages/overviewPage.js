import { Selector, t } from 'testcafe'

class overviewPage{
    constructor(){
        this.overviewHeader =  Selector('.subheader').withText('Overview')
        this.itemCount = Selector('.cart_item')
        this.finishButton = Selector('.cart_button').withText('FINISH')
    }
}

export default new overviewPage();