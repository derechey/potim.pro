import React from 'react';
import CSSModules from 'react-css-modules'


//Import Global Style
import style from '../../Root.scss'

@CSSModules(style, { allowMultiple: true })

class Home extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {


        return (
            <div>
                home
            </div>
        )
    }
}

export default Home;