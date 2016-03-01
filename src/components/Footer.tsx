import * as React from 'react';
import {observer} from 'mobx-react';
import Store from '../store/store';
import RemoveAllCompleted from '../actions/removeAllCompleted';
import SetFilter from '../actions/setFilter';
import {FilterType} from '../store/schema';

@observer
export default class Footer extends React.Component<any, any> {
    onClearCompleted = () => {
        Store.dispatch(new RemoveAllCompleted());
    }

    onSetFilter = (filter: FilterType) => {
        Store.dispatch(new SetFilter(filter));
    }

    render() {
        let {itemsLeft, filter} = Store.getState();

        return (
            <footer className="footer">
                <span className="todo-count">{itemsLeft} Left</span>
                <ul className="filters">
                    <li><a href="#" onClick={() => this.onSetFilter(FilterType.All)} className={filter == FilterType.All ? "selected" : ""}>All</a></li>
                    <li><a href="#" onClick={() => this.onSetFilter(FilterType.Active)} className={filter == FilterType.Active ? "selected" : ""}>Active</a></li>
                    <li><a href="#" onClick={() => this.onSetFilter(FilterType.Completed)} className={filter == FilterType.Completed ? "selected" : ""}>Completed</a></li>
                </ul>
                <button className="clear-completed" onClick={this.onClearCompleted}>Clear completed</button>
            </footer>
        );
    }
}
