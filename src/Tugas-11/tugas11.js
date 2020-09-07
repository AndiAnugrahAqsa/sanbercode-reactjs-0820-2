import React, { Component } from 'react';


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            display: true
        }
    }

    componentDidMount() {
        this.waktu = setInterval(
            () => this.jam(), 1000
        )
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.display === true)
            if (this.state.time === 0) {
                this.setState({
                    display: false
                })
            }
    }



    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }

    jam = () => {

        this.template = 'h:m:s'
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        this.output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

    }





    render() {
        return (
            <>
                {this.state.display && (
                    <>
                        <h1 style={{ float: "left" }}>sekarang jam: {this.output}</h1>
                        <h1 style={{ float: "right" }}>
                            hitung mundur: {this.state.time}
                        </h1>

                    </>
                )
                }
            </>
        )
    }
}


export default Timer

