import React from 'react';
import CSSModules from 'react-css-modules'



//Import Global Style
import style from '../../Root.scss'

@CSSModules(style, { allowMultiple: true })

class Navigation extends React.Component {

    constructor(props) {
        super(props)
    }




    render() {


        return (

                <div styleName="dropdown">
                    <button onclick="myFunction()" styleName="dropbtn">MENU</button>
                    <div id="myDropdown" styleName="dropdownContent">
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">RESUME</a>
                        <a href="#">SKILLS</a>
                        <a href="#">WORKS</a>
                        <a href="#">BLOG</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>
        )
    }
}

export default Navigation;