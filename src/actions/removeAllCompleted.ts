import {Action} from '../lib/action';
import Store from '../store/store';

export default class RemoveAllCompleted implements Action {
    constructor() { }

    execute() {
        let index = 0;
        let items = Store.getState().items;
        let numberOfSplicedItems = 0;

        if (items.length > 0) {
            let item = items[0];

            while (item != null) {
                if (item.completed) {
                    items.splice(index, 1);
                    numberOfSplicedItems++;
                } else {
                    index++;
                }

                item = items[index];
            }
        }
    }
}
