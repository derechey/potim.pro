import React from 'react';
import CSSModules from 'react-css-modules'



//Import Global Style
import style from '../../Root.scss'

@CSSModules(style, { allowMultiple: true })

class Owner extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {


        return (
            <div styleName="Owner">
                <h2>Юрий Деречей</h2>
                <h1>JAVASCRIPT+DEVELOPER</h1>
            </div>
        )
    }
}

export default Owner;