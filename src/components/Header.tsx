import * as React from 'react';
import {observer} from 'mobservable-react';

import Store from '../store/store';
import AddItem from '../mutators/addItem';
import UpdateTextboxValue from '../mutators/updateTextboxValue';

@observer
export default class Header extends React.Component<any, any> {
    private textbox: HTMLInputElement;
    
    onKeyPress: React.KeyboardEventHandler = (e) => {
        if (e.key == "Enter") {
            Store.dispatch(new AddItem(this.textbox.value));
        }
        return true;
    }
    
    onChange = () => {
        // for ephemeral UI state changes, it is okay to use a function 
        Store.dispatch(new UpdateTextboxValue(this.textbox.value));
    }
    
    render() {
        let {textboxValue} = Store.getState();
        
        return (
            <header className="header">
                <h1>todos</h1>
                <input 
                    ref={ctrl => this.textbox = ctrl} 
                    className="new-todo" 
                    placeholder="What needs to be done?"
                    value={textboxValue} 
                    autoFocus={true}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress} />
            </header>
        )
    }
}