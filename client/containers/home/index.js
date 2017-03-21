import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNews} from '../../actions';
import * as scss from './scss/root.scss'
import Slider from 'nuka-carousel'
import CircularProgress from 'material-ui/CircularProgress';

@connect(({news, state}) => ({...news, state}), {getNews})

class Home extends Component {

    componentWillMount() {
        const {getNews} = this.props;
        getNews()
    }

    render() {

        return (
            <div className="row animated fadeInUp">
                <section className="col-lg-12 col-md-12 col-xs-12">
                    <div className="rootBlog" style={{padding:0}}>
                        <div className="rootImage">
                            <img src={require('../../../assets/reactmini.png')} alt="background"/>
                        </div>
                        <div className="avatarWrap">
                            <div style={{width:150,height:150}}>
                                <img src={require('../../../assets/avatar.jpg')} alt='avatar'/>
                                <div style={{position:'absolute',top:0}}>
                                    <CircularProgress size={150} thickness={5} />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="col-lg-12 col-md-12 col-xs-12">
                    <div className="infoSlider">
                        <Slider style={{margin:'10px',height: '250px',overflow:'hidden'}} speed={500} autoplay={true} autoplayInterval={5000} wrapAround={true} cellAlign="center">
                            <div style={{display:'flex'}}>
                                <div style={{width:100,height:100, borderRadius:'100%',border:'5px solid white',overflow:'hidden'}}>
                                    <img style={{height:'100%'}} src={require('../../../assets/avatar.jpg')} alt="background"/>
                                </div>
                                <div>
                                    <h2>Junior React JS</h2>
                                </div>
                            </div>

                        </Slider>
                    </div>

                </section>
            </div>

        );
    }
}


export default Home;