import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {Home, App} from '../containers'

function AppRoute() {
    return [
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>

        </Route>
    ]

}

export default AppRoute;