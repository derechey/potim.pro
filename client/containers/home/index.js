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

                            <div style={{width:'100%',height: 500,
                                overflow: 'hidden'}} >
                                <img style={{width:'100%'}} src="https://pp.userapi.com/c620716/v620716855/19c47/l4g1KD3wgYI.jpg" alt=""/>
                            </div>

                        <h2>Оля Деречей</h2>
                    </div>
                    <div>
                        <video src="https://www.facebook.com/914e3ecb-3e39-4027-a55e-2d4a15c9c078" width="694" height="390" poster="poster.gif" controls />
                    </div>
                </div>
            </div>

        );
    }
}


export default Home;