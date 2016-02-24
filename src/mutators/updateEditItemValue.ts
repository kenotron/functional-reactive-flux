import {Mutator} from '../lib/mutator';
import Store from '../store/store';

export default class UpdateEditItemValue implements Mutator {
    constructor(private text: string) { }

    execute() {
        Store.getState().editItemText = this.text;
    }
}