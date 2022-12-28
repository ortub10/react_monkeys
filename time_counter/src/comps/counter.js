import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Count down to {this.props.appDate}</h2>
        <h3>Days: XX</h3>
      </div>
    );
  }
}

export default Counter;
