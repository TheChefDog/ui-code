import React from "react";

export default class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: this.formatDate(new Date()),
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: this.formatDate(new Date()),
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    formatDate(_d) {
        let hours = _d.getHours() < 10 ? `0${_d.getHours()}` : _d.getHours()
        let minutes = _d.getMinutes() < 10 ? `0${_d.getMinutes()}` : _d.getMinutes() 
        let seconds = _d.getSeconds() < 10 ? `0${_d.getSeconds()}` : _d.getSeconds()
    
        return `${hours}:${minutes}:${seconds} ${_d.getHours() >= 12 ? "PM" : "AM"} - ${_d.toLocaleString('default', { month: 'short', hour12: true })} ${_d.getDate()}`
    }

    render() {
        return (
            <h1 className="py-2 text-sm text-pGray">{this.state['date']}</h1>
        )
    }
}