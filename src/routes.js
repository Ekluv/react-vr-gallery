import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './containers/Home';
import VRView from './containers/VRView';
import App from './app';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path='/vr-view/:index' component={VRView} />
    </Route>
    
)
