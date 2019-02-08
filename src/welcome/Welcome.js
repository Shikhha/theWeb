import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  state = {
    randomNo1: 0,
    randomNo2: 0,
    totalRandom: 0,
    targetValue: 0
  };

  randomize = () => {
    var target = [1, 2, 3, 12, 23, 13];
    var rand = target[Math.floor(Math.random() * target.length)];
    this.totalRandom = rand;
    this.randomNo1 = parseInt(this.totalRandom % 10);
    this.totalRandom / 10 >= 1
      ? (this.randomNo2 = parseInt(this.totalRandom / 10))
      : (this.randomNo2 = 0);
    this.setState({ totalRandom: this.state.totalRandom });
    this.setState({ randomNo1: this.state.randomNo1 });
    this.setState({ randomNo2: this.state.randomNo2 });
  };

  isChecked = checkId => {
    if (checkId === this.randomNo1 || checkId === this.randomNo2) return true;
    else return false;
  };

  setTargetValue = () => {
    var target = [1, 2, 3, 12, 23, 13];
    var rand = target[Math.floor(Math.random() * target.length)];
    this.targetValue = rand;
    var targetString = this.targetValue.toString();
    targetString =
      targetString.length !== 1
        ? (targetString =
            targetString.slice(0, 1) + "," + targetString.slice(1, 2))
        : targetString;

    return targetString;
  };

  getStateValue = () => {
    var result;
    if (this.randomNo1 !== 0 && this.randomNo2 !== 0) {
      result =
        this.randomNo1 === this.randomNo2
          ? this.randomNo1
          : this.randomNo1 < this.randomNo2
          ? this.randomNo1 + "," + this.randomNo2
          : this.randomNo2 + "," + this.randomNo1;
    } else {
      result = this.randomNo1 === 0 ? this.randomNo2 : this.randomNo1;
    }

    return result;
  };

  getResult = () => {
    var result =
      this.totalRandom === this.targetValue ? "Correct State" : "Wrong State";
    return result;
  };
  render() {
    return (
      <div class="containe">
        <h2>Checkboxes</h2>
        <div class="info">
          <p>
            In this page, you can manipulate a set of Checkboxes. <br /> <br />
            In the first example, there are a number of Checkboxes that can be
            manipulated and the result is shown. <br />
            <br /> In the second example, a certain target state will be
            randomized, and as soon as the same state is achieved, the message
            "correct state" will be shown
          </p>
        </div>
        <div className="checkbox">
          <div className="header-sub">
            <h3>Checkboxes</h3>
            <h3>Local state</h3>
          </div>
          <div className="check--container">
            <input type="checkbox" name="name-1" checked={this.isChecked(1)} />{" "}
            checkbox1
            <input type="text" name="status-1" value="unchecked" />
          </div>
          <div className="check--container">
            <input type="checkbox" name="name-2" checked={this.isChecked(2)} />{" "}
            checkbox2
            <input type="text" name="status-2" value="unchecked" />
          </div>
          <div className="check--container">
            <input type="checkbox" name="name-3" checked={this.isChecked(3)} />{" "}
            checkbox3
            <input type="text" name="status-3" value="unchecked" />
          </div>
          <div class="state">
            Target state{" "}
            <input type="text" name="target" value={this.setTargetValue()} />
            Current state{" "}
            <input type="text" name="current" value={this.getStateValue()} />
          </div>
          <br />
          <input
            className="state--button "
            type="text"
            name="state"
            value={this.getResult()}
          />
          <br />
          <br />
          <button onClick={this.randomize}>randomize</button>
          <button>submit</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
