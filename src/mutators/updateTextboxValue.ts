import {Mutator} from '../lib/mutator';
import Store from '../store/store';

export default class UpdateTextboxValue implements Mutator {
    constructor(private text: string) { }

    execute() {
        Store.getState().textboxValue = this.text;
    }
}