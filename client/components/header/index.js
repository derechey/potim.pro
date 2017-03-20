import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {connect} from "react-redux";

import {getSetting} from '../../actions'

@connect(({setting}) => ({...setting}), {getSetting})

class Header extends Component {

    componentWillMount() {
        const {getSetting} = this.props;
        getSetting()
    }

    renderSideBar() {
        return (
            <div >
                <Drawer containerStyle={{top: 75,left: 8}} open={true}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <Drawer containerStyle={{top: 75,right: 9}} openSecondary={true} >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }



    render() {
        const setting = this.props
        console.log('SETTING',seting);
        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                   {this.renderSideBar()}
            </div>

        )
    }
}

export default Header;