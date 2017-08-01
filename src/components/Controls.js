import React, { Component } from 'react';

let controls = {
    start: 'start',
    stop: 'stop',
    pause: 'pause',
    reset: 'reset'
};

class Controls extends Component{
    constructor(props) {
        super(props);
        this.handleControls = this.handleControls.bind(this);
        this.state = {};
    };
    handleControls(e){
        let actionType = e.target.getAttribute('action');
        this.props.onControlFeedback(actionType);
    }
    render() {
        const isTicking = this.props.isTicking;
        let button = null;
        return (
            <div className="counter-controls">
                {
                    !isTicking ?
                        <button className="counter-control" role="button" action={controls.start} onClick={this.handleControls}>{controls.start}</button>
                        :
                        <button className="counter-control" role="button" action={controls.pause} onClick={this.handleControls}>{controls.pause}</button>
                }
                <button className="counter-control" role="button" action={controls.reset} onClick={this.handleControls}>{controls.reset}</button>
            </div>
        );
    }
}
export default Controls;