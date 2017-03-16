import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(state => state)

class Home extends Component {

    render() {


        return (
            <div style={{padding: '10px', textAlign: 'center'}}>
              <h2>HOME</h2>
            </div>

        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Home);