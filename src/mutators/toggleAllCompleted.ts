import {Mutator} from '../lib/mutator';
import Store from '../store/store';

export default class ToggleAllCompleted implements Mutator {
    execute() {
        // is all completed
        let itemsLeft = Store.getState().items.reduce<number>((prev, curr) => {
            return curr.completed ? prev : prev + 1;
        }, 0);
     
        Store.getState().items.forEach(item => item.completed = itemsLeft > 0 ? true : false );
        
        Store.getState().itemsLeft = itemsLeft > 0 ? 0 : Store.getState().items.length; 
    }
}