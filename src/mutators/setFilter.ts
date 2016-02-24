import {Mutator} from '../lib/mutator';
import Store from '../store/store';
import {FilterType} from '../store/schema';

export default class SetFilter implements Mutator {
    constructor(private filter: FilterType) { }

    execute() {       
        Store.getState().filter = this.filter;
    }
}