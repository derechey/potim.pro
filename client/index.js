import '../assets'

import  React, {Component} from  'react'
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightGreen600} from 'material-ui/styles/colors';
import Header from './components/header'
import Blog from './components/blog'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {

        textColor: '#333'
    },
    paper: {
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    drawer: {
        backgroundColor: 'red'
    }
});

class Root extends Component {

    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
               <div>
                   <Header/>
                   <Blog/>
               </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Root />, document.querySelector('potim'));