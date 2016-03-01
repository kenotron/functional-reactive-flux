import {Action} from '../lib/action';
import Store from '../store/store';

export default class UpdateTextboxValue implements Action {
    constructor(private text: string) { }

    execute() {
        Store.getState().textboxValue = this.text;
    }
}