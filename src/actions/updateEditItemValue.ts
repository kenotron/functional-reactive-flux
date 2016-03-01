import {Action} from '../lib/action';
import Store from '../store/store';

export default class UpdateEditItemValue implements Action {
    constructor(private text: string) { }

    execute() {
        Store.getState().editItemText = this.text;
    }
}