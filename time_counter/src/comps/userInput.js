import React, { Component } from "react";

class UserInput extends Component {
  dateInput = React.createRef();

  changeDate = () => {
    this.props.changeDateApp(this.dateInput.current.value);
  };
  render() {
    return (
      <div>
        <input ref={this.dateInput} type="date" defaultValue="2025-05-07" />
        <button onClick={this.changeDate} className="btn btn-success">
          change
        </button>
      </div>
    );
  }
}

export default UserInput;
