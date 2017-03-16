import  React, {Component} from  'react'
import {connect} from "react-redux";

import {Header,Footer} from '../../components'


@connect(state => state)

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <section>
                <Header/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </section>
        )
    }
}

export default App