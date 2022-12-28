import React, { Component } from "react";
import Counter from "./comps/counter";
import "./App.css";

class App extends Component {
  state = {
    myDate: "2023-05-05",
  };

  dateInput = React.createRef();

  changDate = () => {
    this.setState({ myDate: this.dateInput.current.value });
  };

  render() {
    return (
      <div className="App">
        {/* It will be in own component */}
        <Counter appDate={this.state.myDate} />
        <input ref={this.dateInput} type="date" defaultValue="2025-05-07" />
        <button onClick={this.changDate} className="btn btn-success">
          change
        </button>
      </div>
    );
  }
}

export default App;
