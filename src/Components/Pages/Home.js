import React from 'react';
import CSSModules from 'react-css-modules'
import Owner from '../../Components/Elements/Owner'
import Navigation from '../../Components/Layout/Navigation'
import Wrapper from '../../Components/Wrapper'

//Import Global Style
import style from '../../Root.scss'

@CSSModules(style, { allowMultiple: true })

class Home extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {


        return (
            <div styleName="home">
                <Wrapper>
                    <Navigation />
                    <Owner />
                </Wrapper>
            </div>
        )
    }
}

export default Home;