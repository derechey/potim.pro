import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import getRoutes from './Routes';

ReactDOM.render(
    <Router history={browserHistory} routes={getRoutes()}/>,
    document.getElementById('root')
);