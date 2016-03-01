import {Action} from '../lib/action';
import Store from '../store/store';

export default class ToggleCompleted implements Action {
    constructor(private id: string) { }

    execute() {
        let items = Store.getState().items.filter(item => item.id == this.id);
        items[0].completed = !items[0].completed;
        
        Store.getState().itemsLeft = Store.getState().itemsLeft + (items[0].completed ? -1 : 1);
    }
}