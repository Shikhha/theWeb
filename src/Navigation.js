import React, { Component } from "react";
import logo from "./logo.svg";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <h2 className="logo">{this.props.logoTitle}</h2>
          <ul />
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
