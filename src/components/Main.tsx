import * as React from 'react';
import Store from '../store/store';
import {observer} from 'mobservable-react';
import ToggleCompleted from '../mutators/toggleCompleted';
import RemoveItem from '../mutators/removeItem';
import ToggleAllCompleted from '../mutators/toggleAllCompleted';
import {FilterType} from '../store/schema';

@observer
export default class Main extends React.Component<any, any> {
    onToggleCompleted(id: string) {
        Store.dispatch(new ToggleCompleted(id));
    }
    
    onDestroy(id: string) {
        Store.dispatch(new RemoveItem(id));
    }
    
    onToggleAllCompleted() {
        Store.dispatch(new ToggleAllCompleted());
    }
    
    render() {
        let {items, itemsLeft, filter} = Store.getState();
        
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" onClick={this.onToggleAllCompleted} checked={itemsLeft == 0}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {items && items.map(item => {
                        if ((item.completed && filter == FilterType.Completed) || 
                                (!item.completed && filter == FilterType.Active) ||
                                filter == FilterType.All) {
                            return (
                                <li className={item.completed ? "completed" : ""}>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" checked={item.completed} onClick={(e) => this.onToggleCompleted(item.id)} />
                                        <label>{item.text}</label>
                                        <button className="destroy" onClick={(e) => this.onDestroy(item.id)}></button>
                                    </div>
                                </li>    
                            );        
                        } else {
                            return null;
                        }}
                    )}
                </ul>
            </section>
        );
    }
}