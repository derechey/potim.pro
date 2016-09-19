import React from 'react';
import CSSModules from 'react-css-modules'


//Import Global Style
import style from '../../Root.scss'

@CSSModules(style, { allowMultiple: true })

class NotFound extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {


        return (
            <div>
                404
            </div>
        )
    }
}

export default NotFound;