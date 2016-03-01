import ReactiveStore from '../lib/reactiveStore';
import {extendObservable} from 'mobx';
import {StateTree, FilterType} from './schema';

var Store = new ReactiveStore<StateTree>();

extendObservable(Store.getState(), {
    items: [],
    textboxValue: '',
    itemsLeft: 0,
    filter: FilterType.All,
    editItemId: null,
    editItemText: null
});

export default Store;
