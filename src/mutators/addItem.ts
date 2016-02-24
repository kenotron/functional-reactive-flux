import {Mutator} from '../lib/mutator';
import Store from '../store/store';

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default class AddItem implements Mutator {
    constructor(private text: string) { }

    execute() {
        Store.getState().items.push({
            id: guid(),
            text: this.text,
            completed: false
        });
        
        Store.getState().textboxValue = '';
        Store.getState().itemsLeft = Store.getState().itemsLeft + 1;
    }
}