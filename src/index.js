import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import Checkbox from "./components/selectors/Checkbox";
import Exception from "./components/exception/Exception";
import Home from "./components/home/Home";
import Navigation from "./navigation/Navigation";

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
            <Route path="/Home" component={Home} />
            <Route path="/Exception page" component={Exception} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById("root"));
serviceWorker.unregister();
