import React, { Component } from "react";

class Counter extends Component {
  state = {
    days: 0,
  };

  componentDidMount() {
    let daysLeft = this.calcDaysFromDate(this.props.appDate);
    this.setState({ days: daysLeft });
  }

  componentDidUpdate(_props, _state) {
    if (this.props.appDate !== _props.appDate) {
      let daysLeft = this.calcDaysFromDate(this.props.appDate);
      this.setState({ days: daysLeft });
    }
  }

  calcDaysFromDate(_date) {
    let time = Date.parse(_date) - Date.parse(new Date());
    let days = time / (1000 * 60 * 60 * 24);
    return Math.floor(days);
  }

  render() {
    return (
      <div>
        <h2>Count down to {this.props.appDate}</h2>
        <h3>Days: {this.state.days}</h3>
      </div>
    );
  }
}

export default Counter;
