import '../assets'

import  React, {Component} from  'react'
import ReactDOM from 'react-dom';

import Button from './components/button'

class Root extends Component {
    render() {
        return (
            <div className="container text-center">
               <div>
                   App React
                   <Button/>
               </div>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.querySelector('potim'));