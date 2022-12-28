import React, { Component } from "react";
import Counter from "./comps/counter";
import "./App.css";
import UserInput from "./comps/userInput";

class App extends Component {
  state = {
    myDate: "2023-05-05",
  };

  changDate = (_dateVal) => {
    this.setState({ myDate: _dateVal });
  };

  render() {
    return (
      <div className="App">
        <Counter appDate={this.state.myDate} />
        <UserInput changeDateApp={this.changDate} />
      </div>
    );
  }
}

export default App;
