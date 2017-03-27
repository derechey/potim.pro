import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';

class Header extends Component {

    render() {

        return (
            <div className="row">
                <div className="col-xs-12">
                    <AppBar
                        style={{backgroundColor: '#333535'}}
                        title="Юрий Деречей"
                        iconStyleLeft={{display: 'none'}}
                    />
                </div>


            </div>

        )
    }
}

export default Header;