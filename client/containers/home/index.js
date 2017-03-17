import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNews} from '../../actions';
import * as scss from './scss/root.scss'


@connect(({news, state}) => ({...news, state}), {getNews})

class Home extends Component {

    componentWillMount() {
        const {getNews} = this.props;
        getNews()
    }

    render() {
        return (
            <div className="row animated fadeInUp">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="rootBlog">
                        <h2>HOME</h2>
                    </div>
                </div>
            </div>

        );
    }
}


export default Home;