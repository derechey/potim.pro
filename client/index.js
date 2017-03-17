import '../assets'
import  React, {Component} from  'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from "./routes";
import configureStore from "./store";

const store = configureStore();

injectTapEventPlugin();

class Root extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router className="container" history={browserHistory} routes={routes(store)} onUpdate={() => window.scrollTo(0, 0)}/>
                </Provider>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Root />, document.querySelector('potim'));