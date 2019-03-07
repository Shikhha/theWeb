import React, { Component } from "react";
import "../../scss/main.css";
class Exception extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2 };
  }
  generateError = () => {
    if (this.state.value !== 3) {
      try {
        throw new Error("error has occured");
      } catch (err) {
        console.log(err);
      }
    }
  };
  render() {
    return (
      <div class="container-exception">
        <h2>exception generator</h2>
        <button class="btn-exception" onClick={this.generateError}>
          Click
        </button>
      </div>
    );
  }
}
export default Exception;
