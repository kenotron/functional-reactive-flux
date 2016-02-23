import {observable, transaction} from 'mobservable';
import Mutator, {Action} from './Mutator';

export default class ReactiveStore<T> {
    private state: T = <T>observable({});
    
    getState(): T {
        return this.state;
    }
    
    dispatch = (mutator: Action | Mutator): void => {
        if ((<Mutator>mutator).execute) {
            transaction(() => { (<Mutator>mutator).execute(this.dispatch); });            
        } else {
            transaction(() => { (<Action>mutator)(this.dispatch); });
        }
    }
}
