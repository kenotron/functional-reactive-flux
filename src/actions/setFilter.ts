import {Action} from '../lib/action';
import Store from '../store/store';
import {FilterType} from '../store/schema';

export default class SetFilter implements Action {
    constructor(private filter: FilterType) { }

    execute() {
        Store.getState().filter = this.filter;
    }
}
