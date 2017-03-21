import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import {connect} from "react-redux"
import {getSetting} from '../../actions'

@connect(({setting}) => ({...setting}), {getSetting})

class Header extends Component {

    componentWillMount() {
        const {getSetting} = this.props;
        getSetting()
    }

    render() {

        return (
            <div>
                <AppBar
                    style={{backgroundColor:'#333535'}}
                    title="Юрий Деречей"
                    iconStyleLeft={{display:'none'}}
                />

            </div>

        )
    }
}

export default Header;