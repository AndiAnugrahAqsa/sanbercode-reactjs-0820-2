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

        this.output = date.toLocaleTimeString('en-US')

    }





    render() {
        return (
            <>
                {this.state.display && (
                    <div style={{ fontFamily: "sans-serif" }}>
                        <h1 style={{ float: "left" }}>sekarang jam: {this.output}</h1>
                        <h1 style={{ float: "right" }}>
                            hitung mundur: {this.state.time}
                        </h1>

                    </div>
                )
                }
            </>
        )
    }
}


export default Timer

