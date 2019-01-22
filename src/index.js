import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Navigation from "./navigation/Navigation";
import Welcome from "./welcome/Welcome";
import Navigation from "./navigation/Navigation";

class App1 extends Component {
  render() {
    return (
      <div>
        <nav>
          <Navigation logoTitle="theWeb" />
        </nav>
        <aside>
          <Welcome />
        </aside>
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById("root"));
serviceWorker.unregister();
