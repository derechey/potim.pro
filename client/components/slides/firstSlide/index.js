import React, {Component} from "react";
import CircularProgress from 'material-ui/CircularProgress';

class FirstSlide extends Component {

    constructor(props) {
        super(props);
        const {percent} = this.props;
        this.state = {
            completed: 0,
            count: 0,
            maxCount: percent
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(100), 1300);
        this.timerId = setInterval(() => {
            let {count, maxCount} = this.state;
            (count === maxCount) ? clearInterval(this.timerId) :
                count++;
            this.setState({count});
        }, 20)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        clearTimeout(this.timerId);
    }

    progress(completed) {
        const {percent} =this.props;
        (completed > 100) ? this.setState({completed: 100}) :
            this.setState({completed});
        this.timer = setTimeout(() => this.progress(percent));

    }

    render() {
        const {skill} = this.props;
        return (
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    width: 100,
                    height: 100,
                    position: 'relative',
                    top: '30%'
                }}>
                <CircularProgress
                    color='red'
                    mode="determinate"
                    value={this.state.completed}
                    size={100}
                    thickness={7}/>
                <div style={{position: 'absolute', top: '30%', left: 0, right: 0}}>
                    <p>{skill} </p>
                    <p>{this.state.count}%</p>
                </div>
            </div>

        )
    }
}

export default FirstSlide;