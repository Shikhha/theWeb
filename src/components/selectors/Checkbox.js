import React, { Component } from "react";
import "../../scss/main.css";

class Checkbox extends Component {
  state = {
    randomNo1: 0,
    randomNo2: 0,
    randomNo3: 0,
    totalRandom: 0,
    totalCurrent: 0,
    targetValue: 0,
    counter: 0,
    click: 0,
    submit: false,
    random: false,
    checkboxState: [false, false, false]
  };

  randomize = () => {
    console.log("INSIDE RANDOMIZED");
    this.reset();
    var target = [1, 2, 3, 12, 23, 13, 123];
    var rand = target[Math.floor(Math.random() * target.length)];
    this.state.totalRandom = rand;
    if (rand.toString().length === 3) {
      this.state.randomNo3 = rand % 10;
      this.state.totalRandom = parseInt(rand / 10);
    } else {
      this.state.randomNo3 = 0;
    }
    this.state.randomNo1 = parseInt(this.state.totalRandom % 10);
    this.state.totalRandom / 10 >= 1
      ? (this.state.randomNo2 = parseInt(this.state.totalRandom / 10))
      : (this.state.randomNo2 = 0);
    this.state.counter = 1;
    this.state.totalRandom = rand;
    this.state.random = true;
    this.setState({ random: this.state.random });
    if (this.state.randomNo1 !== 0) {
      let checkbox1 = document.getElementById(this.state.randomNo1.toString());
      checkbox1.checked = true;
      this.state.checkboxState[this.state.randomNo1 - 1] = true;
    }
    if (this.state.randomNo2 !== 0) {
      let checkbox2 = document.getElementById(this.state.randomNo2.toString());
      checkbox2.checked = true;
      this.state.checkboxState[this.state.randomNo2 - 1] = true;
    }
    if (this.state.randomNo3 !== 0) {
      let checkbox3 = document.getElementById(this.state.randomNo3.toString());
      checkbox3.checked = true;
      this.state.checkboxState[this.state.randomNo3 - 1] = true;
    }
  };

  reset = () => {
    let highlightedItem = document.querySelectorAll(".check");
    highlightedItem.forEach(checkbox => {
      checkbox.checked = false;
      this.state.checkboxState[parseInt(checkbox.id) - 1] = false;
    });
    this.state.submit = false;
    let state = document.querySelector(".button-primary-display");
    state.value = "--";
  };

  handleChecked = event => {
    this.state.random = true;
    let id = parseInt(event.target.id);
    if (this.state.checkboxState[id - 1] === false) {
      event.target.checked = true;
      this.state.checkboxState[id - 1] = true;
      document.getElementById("status-" + id).value = "checked";
    } else {
      event.target.checked = false;
      this.state.checkboxState[id - 1] = false;
      document.getElementById("status-" + id).value = "unchecked";
    }
    let currentvalue = document.querySelector(".text2");
    currentvalue.value = this.getCurrentValue();
  };

  submit = () => {
    this.state.random = false;
    this.state.totalCurrent = 0;
    let currentVal = this.state.totalCurrent;
    this.state.submit = true;
    this.state.checkboxState.forEach((current, index) => {
      if (current === true) {
        currentVal = currentVal * 10 + index + 1;
      }
    });
    this.state.totalCurrent = currentVal;
    this.setState({ submit: this.state.submit });
    this.setState({ totalCurrent: this.state.totalCurrent });
    this.state.counter = 1;
    console.log("current value => " + this.state.totalCurrent);
  };

  displayStatus = checkId => {
    if (this.state.submit === false) {
      if (checkId === this.state.randomNo1 || checkId === this.state.randomNo2)
        return "checked";
      else return "unchecked";
    }
  };

  getTargetValue = () => {
    if (this.state.random === true) {
      if (this.state.counter === 0) {
        return "";
      }
      var target = [1, 2, 3, 12, 23, 13, 123];
      var rand = target[Math.floor(Math.random() * target.length)];
      this.state.targetValue = rand;
      var targetString = this.state.targetValue.toString();
      targetString =
        targetString.length !== 1
          ? (targetString =
              targetString.slice(0, 1) + "," + targetString.slice(1, 2))
          : targetString;
      if (rand.toString().length === 3) {
        targetString += "," + (rand % 10);
      }
      return targetString;
    }
  };

  getCurrentValue = () => {
    let arr = [];
    let result = "";
    if (this.state.random) {
      this.state.checkboxState.forEach((current, index) => {
        if (current === true) {
          arr.push(index + 1);
        }
      });

      // else {
      //   arr.push(this.state.randomNo1);
      //   arr.push(this.state.randomNo2);
      //   arr.push(this.state.randomNo3);
      // }
      arr.sort();
      arr.forEach((current, index) => {
        if (current !== 0) {
          if (index !== arr.length - 1) {
            result += current + ",";
          } else {
            result += current;
          }
        }
      });
      return result;
    }
  };

  getResult = () => {
    if (this.state.submit === true) {
      if (this.state.targetValue === 0) {
        return "--";
      } else {
        var result =
          this.state.totalCurrent === this.state.targetValue
            ? "Correct State"
            : "Wrong State";

        return result;
      }
    }
  };
  clear = () => {
    this.reset();
    this.state.click = 0;
    this.state.randomNo1 = 0;
    this.state.randomNo2 = 0;
    this.state.randomNo3 = 0;
    document.querySelector(".text1").value = "";
    document.querySelector(".text2").value = "";
    document.getElementById("status-1").value = "unchecked";
    document.getElementById("status-2").value = "unchecked";
    document.getElementById("status-3").value = "unchecked";
  };

  render() {
    return (
      <div class="container-checkbox">
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
        <div className="checkboxes">
          <div className="header-sub">
            <h3>Checkboxes</h3>
            <h3>Local state</h3>
          </div>
          <div className="checkboxes-row">
            <input
              id="1"
              class="check"
              type="checkbox"
              name="name-1"
              onClick={this.handleChecked}
            />{" "}
            Checkbox-1
            <input id="status-1" type="text" value={this.displayStatus(1)} />
          </div>
          <div className="checkboxes-row">
            <input
              id="2"
              class="check"
              type="checkbox"
              name="name-2"
              onClick={this.handleChecked}
            />{" "}
            Checkbox-2
            <input id="status-2" type="text" value={this.displayStatus(2)} />
          </div>
          <div className="checkboxes-row">
            <input
              id="3"
              class="check"
              type="checkbox"
              name="name-3"
              onClick={this.handleChecked}
            />{" "}
            Checkbox-3
            <input id="status-3" type="text" value={this.displayStatus(3)} />
          </div>
          <div class="textbox-state">
            <b>Target state</b>{" "}
            <input
              type="text"
              name="target"
              class="text1"
              value={this.getTargetValue()}
            />
            <b>Current state</b>{" "}
            <input
              type="text"
              name="current"
              class="text2"
              value={this.getCurrentValue()}
            />
          </div>
          <br />
          <div class="button-primary">
            <input
              className="button-primary-display "
              type="text"
              name="state"
              defaultValue="--"
              value={this.getResult()}
            />
            <br />
            <br />
            <div class="button-primary-random">
              <button onClick={this.randomize}>randomize</button>
              <button onClick={this.submit}>submit</button>
              <button onClick={this.clear}>clear</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkbox;
