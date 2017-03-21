import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNews} from '../../actions';
import * as scss from './scss/root.scss'
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from "react-swipeable-views";
import CircularProgress from 'material-ui/CircularProgress';

@connect(({news, state}) => ({...news, state}), {getNews})

class Home extends Component {

    componentWillMount() {
        const {getNews} = this.props;
        getNews()
    }

    render() {
        const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
        return (
            <div className="row">
                <section className="col-lg-12 col-md-12 col-xs-12  animated fadeInLeft">
                    <div className="rootBlog" style={{padding: 0}}>
                        <div className="rootImage">
                            <img src={require('../../../assets/reactmini.png')} alt="background"/>
                        </div>
                    </div>
                </section>

                <div className="row">
                    <section className="col-lg-12 col-md-12 col-xs-12">
                        <div className="avatarWrap">
                            <div style={{width: 150, height: 150}}>
                                <img src={require('../../../assets/background.jpg')} alt='avatar'/>
                                <div style={{position: 'absolute', top: 0}}>
                                    <CircularProgress size={150} thickness={5}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="col-lg-12 col-md-12 col-xs-12 animated fadeInRight">
                    <div className="infoSlider">
                        <AutoPlaySwipeableViews interval={10000}
                                                style={{margin: '10px', height: '310px', overflow: 'hidden'}}>
                            <div style={{display: 'flex'}}>

                                <ul className="animated zoomInDown ">
                                    <li>
                                        <div style={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: '100%',
                                            border: '5px solid white',
                                            overflow: 'hidden'
                                        }}>
                                            <img style={{height: '100%'}} src={require('../../../assets/avatar.jpg')}
                                                 alt="background"/>
                                        </div>
                                    </li>

                                    <ul>
                                        <li>
                                            <ul>
                                                <li>
                                                    <div style={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: '100%',
                                                        border: '5px solid white',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <img style={{height: '100%'}}
                                                             src={require('../../../assets/avatar4.jpg')}
                                                             alt="background"/>
                                                    </div>
                                                    <div style={{
                                                        width: 70,
                                                        height: 70,
                                                        borderRadius: '100%',
                                                        border: '5px solid white',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <img style={{height: '100%'}}
                                                             src={require('../../../assets/avatar3.jpg')}
                                                             alt="background"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>


                                    <li>
                                        <div style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: '100%',
                                            border: '5px solid white',
                                            overflow: 'hidden'
                                        }}>
                                            <img style={{height: '100%'}} src={require('../../../assets/avatar2.jpg')}
                                                 alt="background"/>
                                        </div>
                                    </li>
                                </ul>


                                <div>
                                    <h2>Junior React JS</h2>
                                </div>
                            </div>


                            <div style={{display: 'flex'}}>
                                <div style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '100%',
                                    border: '5px solid white',
                                    overflow: 'hidden'
                                }}>
                                    <img style={{height: '100%'}} src={require('../../../assets/avatar.jpg')}
                                         alt="background"/>
                                </div>
                                <div style={{fontSize: 25, listStyleType: 'none', textAlign: 'left'}}>
                                    <ul>
                                        <li>
                                            <p>HTML</p>
                                            <ul>
                                                <li>
                                                    <p>CSS</p>
                                                    <ul>
                                                        <li>
                                                            <p>SCSS</p>
                                                            <ul>
                                                                <li>
                                                                    <p> FlexBox</p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>Inline css</p>
                                                                            <ul>
                                                                                <li>
                                                                                    <p>BEM</p>
                                                                                    <ul>
                                                                                        <li>Animate CSS</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </AutoPlaySwipeableViews>
                    </div>

                </section>
            </div>

        );
    }
}


export default Home;