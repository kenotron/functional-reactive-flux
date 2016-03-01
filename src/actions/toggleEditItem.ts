import {Action} from '../lib/action';
import Store from '../store/store';

export default class ToggleEditItem implements Action {
    constructor(private id: string) { }

    execute() {
        if (Store.getState().editItemId != this.id && this.id) {
            let items = Store.getState().items.filter(item => item.id == this.id);
            Store.getState().editItemId = this.id;    
            Store.getState().editItemText = items[0].text;
        } else {
            Store.getState().editItemId = null;
        }
    }
}