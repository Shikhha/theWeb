import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Welcome from "./welcome/Welcome";
import Navigation from "./navigation/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import Checkbox from "./components/selectors/Checkbox";

class App1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav>
              <Navigation logoTitle="theWeb" />
            </nav>
            <Route path="/Checkbox" component={Checkbox} />
            <Route path="/home" component={Welcome} />
            <aside>
              <Welcome />
            </aside>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById("root"));
serviceWorker.unregister();
