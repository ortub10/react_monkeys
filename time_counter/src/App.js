import React, { Component } from "react";
// import Counter from "./comps/counter";
import "./App.css";
import MyInput from "./otherComps/myInput";

class App extends Component {
  state = {
    myDate: "2025-05-05",
  };
  changDate = () => {
    this.setState({ myDate: "2021-01-10" });
    // this.forceUpdate();
  };
  render() {
    return (
      <div className="App">
        <MyInput />
        {/* It will be in own component */}
        {/* <Counter appDate={this.state.myDate} />
        <input defaultValue="monkeys" />
        <button onClick={this.changDate} className="btn btn-success">
          change
        </button> */}
      </div>
    );
  }
}

export default App;
