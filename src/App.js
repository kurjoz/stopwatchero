import React, { Component } from 'react';
import Display from './components/Display';
import Controls from './components/Controls';
import ModeSwitch from './components/ModeSwitch';
import './App.css';

let appMode = {
    stopwatch: 'stopwatch',
    timer: 'timer',
    pomodoro: 'pomodoro',
    clock: 'clock'
};

class Counter extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.modeChange = this.modeChange.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            counter: 0,
            interval: 10,
            mode: appMode.stopwatch,
            isRunning: false
        };
    };
    tick() {
        this.setState({counter: this.state.counter + this.state.interval});
    };
    timerRuns = false;
    handleChange(actionType) {
        switch (actionType){
            case 'start':
                if(this.timerRuns === false){
                    this.tickInterval = setInterval(this.tick, this.state.interval);
                    this.timerRuns = true;
                    this.setState({isRunning: this.timerRuns})
                } else{
                    return false;
                }
                break;
            case 'pause':
                if(this.timerRuns === true) {
                    clearInterval(this.tickInterval);
                    this.timerRuns = false;
                    this.setState({isRunning: this.timerRuns})
                } else{
                    return false;
                }

                break;
            case 'stop':
                if(this.timerRuns === true) {
                    clearInterval(this.tickInterval);
                    this.timerRuns = false;
                    this.setState({isRunning: this.timerRuns})
                } else{
                    return false;
                }
                break;
            case 'reset':
                this.setState({counter: 0});
                if(this.timerRuns === true) {
                    clearInterval(this.tickInterval);
                    this.timerRuns = false;
                    this.setState({isRunning: this.timerRuns})
                } else{
                    return false;
                }
                break;
            default: return
        }
    };
    modeChange(mode) {
        this.setState({mode: mode})
    };
    render() {
        return (
            <div className="counter">
                <Display value={this.state.counter} mode = {this.state.mode}/>
                <Controls isTicking={this.state.isRunning} onControlFeedback={this.handleChange}  />
                <ModeSwitch onChange={this.modeChange} />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
          <div className="App">
              <Counter />
          </div>
        );
    }
}

export default App;

//TODO#100: 'Clock mode'
//TODO#200: 'Counter mode'
//TODO#210: 'Add possibility to set counter manually'
//TODO#101: 'Add color skins'
//TODO#999: 'Write tests' ++
