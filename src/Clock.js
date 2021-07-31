import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentWillMount() {
    this.getUntilTime(this.props.deadLine);
  }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.getUntilTime(this.props.deadLine);
  //     }, 1000);
  //   }

  getUntilTime(deadLine) {
    const time = Date.parse(deadLine) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const day = Math.floor(time / (1000 * 60 * 60 * 60 * 24));

    this.setState({ day, hours, minutes, seconds });
    console.log(day);
  }

  render() {
    console.log("props : ", this.props);
    return (
      <div className="content">
        <div className="Clock-day">{this.state.day} day</div>
        <div className="Clock-hour">{this.state.hours} hours</div>
        <div className="Clock-minutes">{this.state.minutes} minutes</div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div>
    );
  }
}

export default Clock;
