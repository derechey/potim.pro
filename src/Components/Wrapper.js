import React from 'react';
import CSSModules from 'react-css-modules'

import style from '../Root.scss'

@CSSModules(style, { allowMultiple: true })

class Wrapper extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <section styleName="Wrapper">
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}




export default Wrapper;