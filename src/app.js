import React from 'react';

import HomePage from './containers/Home';

export default class App extends React.Component {

    render() {
        return (
        <div className="app">
        	<h2>React VR Gallery</h2>
            {this.props.children}
        </div>
        );
    }
}