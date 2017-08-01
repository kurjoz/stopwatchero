import React, { Component } from 'react';

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode: this.props.mode
        }
    };

    render() {
        let displayMode = this.props.mode;

        function Screen(props) {
            let displayValue = 'no change';
            if (displayMode === 'stopwatch') {
                displayValue = formatDisplayTime(props.value);
            }
            if (displayMode === 'timer') {
                displayValue = 'Timer'
            }
            if (displayMode === 'pomodoro') {
                displayValue = 'Pomodoro'
            }
            if (displayMode === 'clock') {
                displayValue = getCurrentTime();
            }
            return (
                <div className="counter-display">
                    {displayValue}
                </div>
            )
        }
        function formatDisplayTime(milsec) {
            let milliseconds = ((milsec) > 999) ? Math.floor(milsec, 3)%1000 : Math.floor(milsec, 3);
            let seconds = ((milsec) / 1000 > 59) ? Math.floor(milsec / 1000 , 1) % 60  : Math.floor(milsec / 1000 , 1);
            let minutes = Math.floor((milsec)/60000, 1);
            return  minutes + ' : ' + seconds + ' : ' + milliseconds
        }
        function getCurrentTime () {
            let currentdate = new Date();
            return currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        }
        return (
            <Screen value={this.props.value}/>
        );
    }
}

export default Display;