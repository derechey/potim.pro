import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {connect} from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';
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
        (window.innerWidth <= 900)
            ? this.setState({open: false})
            : this.setState({open: true});
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
                    <MenuItem>
                        <div style={{display:'flex',justifyContent:'center',width:'100%',height:150,marginTop:20}}>
                            <div  style={{width:150,height:150}}>
                                <img style={{ width:'100%',borderRadius:'100%'}} src={require('../../../assets/background.jpg')} alt='avatar'/>
                            </div>
                        </div>

                    </MenuItem>
                    <MenuItem>
                        <div style={{marginTop:20,display:'flex',justifyContent:'center'}}>
                            <RaisedButton
                                href="https://www.facebook.com/profile.php?id=100001036684071&fref=hovercard"
                                label="Юрий Деречей"
                            />
                        </div>
                   </MenuItem>
                </Drawer>
            </div>
        );

    }

    render() {

        return (
            <div>
                <AppBar
                    style={{backgroundColor:'#333535'}}
                    title="Юрий Деречей"
                    iconStyleLeft={{display:'none'}}
                />
                {/*{this.renderSideBar()}*/}
            </div>

        )
    }
}

export default Header;