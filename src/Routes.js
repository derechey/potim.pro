import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router';

//Import Components

import Base     from './Components/Base'
import Home     from './Components/Pages/Home'
import NotFound from './Components/Pages/NotFound'

export default function getRoutes() {
    return (

        <div>

            <Route path="/" component={Base}>

                <IndexRoute component={Home}/>

            </Route>

            <Route path="*" component={NotFound}/>

        </div>

    );
}