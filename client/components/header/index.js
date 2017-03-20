import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {connect} from "react-redux";

import {getSetting} from '../../actions'

@connect(({setting}) => ({...setting}), {getSetting})

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }

    componentWillMount() {
        const {getSetting} = this.props;
        getSetting()
    }

    componentDidMount() {
        window.addEventListener('resize', this.toggleDrawer.bind(this))
    }

    toggleDrawer(event) {
        (event.currentTarget.innerWidth <= 900)
            ? this.setState({open: false})
            : this.setState({open: true})

    }

    renderSideBar() {
        return (
            <div >
                <Drawer containerStyle={{top: 75, left: 8}} open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <Drawer containerStyle={{top: 75, right: 9}} openSecondary={true} open={this.state.open}>
                    <MenuItem>Seconray Menu Item</MenuItem>
                    <MenuItem>Seconray Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );

    }

    render() {

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