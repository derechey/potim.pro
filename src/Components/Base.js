import React from 'react';
import CSSModules from 'react-css-modules'

import style from '../Root.scss'

@CSSModules(style, { allowMultiple: true })

class Base extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <section>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}


export default Base;