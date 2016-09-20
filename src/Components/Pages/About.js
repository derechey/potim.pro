import React from 'react';
import CSSModules from 'react-css-modules'


//Import Global Style
import style from '../../Root.scss'

@CSSModules(style, { allowMultiple: true })

class About extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {


        return (
            <div>
               About Me
            </div>
        )
    }
}

export default About;