import {Action} from '../lib/action';
import Store from '../store/store';

export default class UpdateItem implements Action {
    constructor(private id: string, private text: string) { }

    execute() {
        let items = Store.getState().items.filter(item => item.id == this.id);
        if (items.length == 1) {
            let item = items[0];
            item.text = this.text;
        }
    }
}