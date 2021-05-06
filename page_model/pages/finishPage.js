import { Selector, t } from 'testcafe'

class finishPage{
    constructor(){
        this.finishHeader =  Selector('.title')
    }
}

export default new finishPage();