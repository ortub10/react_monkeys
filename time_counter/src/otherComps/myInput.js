import React, { Component } from "react";

class MyInput extends Component {
  state = {
    user: "guest",
  };

  userInput = React.createRef();

  changeName = () => {
    // alert(this.userInput.current.value);
    this.setState({ user: this.userInput.current.value });
  };
  render() {
    return (
      <div>
        <h2>Welcome {this.state.user}</h2>
        <h4>Enter your name: </h4>
        <input ref={this.userInput} type="text" defaultValue="koko" />
        <button onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}

export default MyInput;
