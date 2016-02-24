import * as React from 'react';

export default class Main extends React.Component<any, any> {
    render() {
        var items = [];
        
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {items.map(item => (
                        <li className={item.completed ? "completed" : ""}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={item.completed} />
                                <label>{item.title}</label>
                                <button className="destroy"></button>
                            </div>
                        </li>    
                    ))}
                    
                </ul>
            </section>
        );
    }
}