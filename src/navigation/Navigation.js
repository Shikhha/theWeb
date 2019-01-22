import React, { Component } from "react";
import logo from "../logo.svg";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const gettingStarted = ["Introduction", "Overview of the tool"];
    const navLinks = gettingStarted.map(section => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });
    return (
      <React.Fragment>
        <nav>
          <h2 className="logo">{this.props.logoTitle}</h2>
          <h2>Getting Started</h2>
          <ul>{navLinks}</ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
