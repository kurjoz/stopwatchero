import React, { Component } from 'react';

let appMode = {
    stopwatch: 'stopwatch',
    timer: 'timer',
    pomodoro: 'pomodoro',
    clock: 'clock'
};
class ModeSwitch extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: this.props.mode
        };
    };
    handleChange(e){
        let mode = e.target.value;
        this.props.onChange(mode);
    }
    render() {
        return (
            <div className="mode-switch">
                <select value={this.state.mode} onChange={this.handleChange}>
                    {
                        Object.keys(appMode).map(function(key){
                            return <option key={key} value={key}>{appMode[key]}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default ModeSwitch;