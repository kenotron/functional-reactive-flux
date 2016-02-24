import {Mutator} from '../lib/mutator';
import Store from '../store/store';

export default class RemoveItem implements Mutator {
    constructor(private id: string) { }

    execute() {
        let index = 0;
        let found = -1;
        let items = Store.getState().items;
        for (var item of items) {
            if (item.id == this.id) {
                found = index;
                break;
            }
            
            index++;
        }
        
        items.splice(index, 1);
        
        Store.getState().itemsLeft = Math.max(0, Store.getState().itemsLeft - 1);
    }
}