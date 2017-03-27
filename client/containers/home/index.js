import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNews} from '../../actions';
import * as scss from './scss/root.scss'
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from "react-swipeable-views";
import CircularProgress from 'material-ui/CircularProgress';
import {FirstSlide} from '../../components'
import {SecondSlide} from '../../components'

@connect(({news, state}) => ({...news, state}), {getNews})

class Home extends Component {

    componentWillMount() {
        const {getNews} = this.props;
        getNews()
    }

    render() {
        const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
        return (
            <div>


                <div className="row">
                    <section className="col-lg-12 col-md-12 col-xs-12  animated fadeInLeft">
                        <div className="rootBlog" style={{padding: 0}}>
                            <div className="rootImage">
                                <img src={require('../../../assets/reactmini.png')} alt="background"/>
                            </div>
                        </div>
                    </section>
                </div>


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

                <div className="row">
                    <section className="col-lg-12 col-md-12 col-xs-12 animated fadeInRight">
                        <div className="infoSlider">
                            <AutoPlaySwipeableViews interval={10000}
                                                    style={{margin: '10px'}}>
                                <div style={{display: 'flex', height: 300, justifyContent: 'space-around'}}>
                                    <FirstSlide percent={90} skill={'Html'}/>
                                    <FirstSlide percent={90} skill={'CSS'}/>
                                    <FirstSlide percent={90} skill={'SCSS'}/>
                                    <FirstSlide percent={70} skill={'Bem'}/>
                                    <FirstSlide percent={90} skill={'Material ui'}/>
                                    <FirstSlide percent={80} skill={'Jira'}/>
                                    <FirstSlide percent={45} skill={'Gulp'}/>
                                    <FirstSlide percent={90} skill={'Git'}/>
                                    <FirstSlide percent={93} skill={'Bootstrap'}/>
                                    <FirstSlide percent={90} skill={'Json'}/>
                                    <FirstSlide percent={75} skill={'Rest'}/>
                                    <FirstSlide percent={95} skill={'Inline css'}/>
                                    <FirstSlide percent={90} skill={'FlexBox'}/>
                                </div>

                                <div style={{marginTop: 80}}>
                                    <SecondSlide/>
                                </div>

                            </AutoPlaySwipeableViews>
                        </div>

                    </section>
                </div>

            </div>

        );
    }
}


export default Home;