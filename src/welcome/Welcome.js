import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
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
        <div class="checkbox">
          <table>
            <tr>
              <td>
                <h3>Checkboxes</h3>
              </td>
              <td>
                <h3>Local state</h3>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="name-1" />
                checkbox1
              </td>
              <td>
                <input type="text" name="status-1" value="unchecked" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="name-2" /> checkbox2
              </td>
              <td>
                <input type="text" name="status-2" value="unchecked" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="name-3" /> checkbox3
              </td>
              <td>
                <input type="text" name="status-3" value="unchecked" />
              </td>
            </tr>
          </table>
          target state <input type="text" name="target" value="0" />
          <br />
          current state <input type="text" name="current" value="0" />
          <br />
          <br />
          <button>check_state</button>
          <br />
          <br />
          <button>randomize</button>
          <button>submit</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
