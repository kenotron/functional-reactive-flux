import * as React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends React.Component<any, any> {
    render() {
        let items = [];
        
        return (
            <div>
                <Header />                
                <Main />
                <Footer />
            </div>
        );
    }
}