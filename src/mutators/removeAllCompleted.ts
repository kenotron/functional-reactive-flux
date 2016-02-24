import {Mutator} from '../lib/mutator';
import Store from '../store/store';

export default class RemoveAllCompleted implements Mutator {
    constructor() { }

    execute() {
        let index = 0;
        let items = Store.getState().items;
        let numberOfSplicedItems = 0;
        
        for (var item of items) {
            if (item.completed) {
                items.splice(index, 1);
                numberOfSplicedItems++;
            } else {
                index++;    
            }
        }
        
        Store.getState().itemsLeft = Math.max(0, Store.getState().itemsLeft - numberOfSplicedItems);
    }
}