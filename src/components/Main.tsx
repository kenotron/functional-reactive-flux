import * as React from 'react';
import Store from '../store/store';
import {observer} from 'mobx-react';
import ToggleCompleted from '../actions/toggleCompleted';
import RemoveItem from '../actions/removeItem';
import ToggleAllCompleted from '../actions/toggleAllCompleted';
import ToggleEditItem from '../actions/toggleEditItem';
import UpdateEditItemValue from '../actions/updateEditItemValue';
import UpdateItem from '../actions/UpdateItem';
import {FilterType} from '../store/schema';

@observer
export default class Main extends React.Component<any, any> {
    componentDidUpdate() {
        if (Store.getState().editItemId) {
            let inputElement = this.refs["edit_" + Store.getState().editItemId] as HTMLInputElement;
            inputElement.focus();    
        }
    }
    
    onToggleCompleted(id: string) {
        Store.dispatch(new ToggleCompleted(id));
    }
    
    onDestroy(id: string) {
        Store.dispatch(new RemoveItem(id));
    }
    
    onToggleAllCompleted() {
        Store.dispatch(new ToggleAllCompleted());
    }
    
    onToggleEdit = (id: string) => {
        let inputElement = this.refs["edit_" + id] as HTMLInputElement;
        Store.dispatch(new ToggleEditItem(id));
    }
    
    onEditEnd = (id: string) => {
        let inputElement = this.refs["edit_" + id] as HTMLInputElement;
        Store.dispatch(new ToggleEditItem(null));
        Store.dispatch(new UpdateItem(id, inputElement.value));
    }
    
    onChange = (id: string) => {
        let inputElement = this.refs["edit_" + id] as HTMLInputElement;
        Store.dispatch(new UpdateEditItemValue(inputElement.value));
    }
    
    render() {
        let {items, itemsLeft, filter, editItemId, editItemText} = Store.getState();
        
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" onChange={this.onToggleAllCompleted} checked={itemsLeft == 0}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {items && items.map(item => {
                        if ((item.completed && filter == FilterType.Completed) || 
                                (!item.completed && filter == FilterType.Active) ||
                                filter == FilterType.All) {
                            return (
                                <li ref={item.id} key={item.id} className={
                                        (item.completed ? "completed" : "") +
                                        (item.id == editItemId ? " editing" : "")
                                    }>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" checked={item.completed} onClick={(e) => this.onToggleCompleted(item.id)} />
                                        <label onDoubleClick={(e) => this.onToggleEdit(item.id)}>{item.text}</label>
                                        <button className="destroy" onClick={(e) => this.onDestroy(item.id)}></button>
                                    </div>
                                    <input 
                                        className="edit" 
                                        type="text" 
                                        ref={"edit_" + item.id}
                                        value={editItemText}
                                        onChange={(e) => this.onChange(item.id)}
                                        onBlur={(e) => this.onEditEnd(item.id)} 
                                        onKeyUp={(e) => { if (e.key == "Enter") this.onEditEnd(item.id); }} />
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