import React, { Component } from "react";
import Counter from "./comps/counter";
import "./App.css";

class App extends Component {
  // myDate = "2030-01-01";
  render() {
    return (
      <div className="App">
        {/* <h2>Count down to {this.myDate}</h2>
        <h3>Days: XX</h3> */}
        {/* It will be in own component */}
        <Counter />
        <input defaultValue="monkeys" />
        <button className="btn btn-success">change</button>
      </div>
    );
  }
}

export default App;
