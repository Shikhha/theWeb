import React, { Component } from "react";
import logo from "../logo.svg";
import "../scss/main.css";
import Home from "../components/home/Home";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
  render() {
    const selectors = ["Checkbox", "Radiobuttons", "Slider"];
    const actions = ["Links", "Buttons"];
    const forms = ["Drop-downs", "Input", "Text-area", "Content-editable"];
    const dragAndDrop = ["Drag"];
    const files = ["File Upload", "File Download"];
    const exception = ["Exception page"];
    var path = "/";
    let navLinks = item => {
      return item.map(section => {
        return (
          <li>
            <NavLink to={path + section}>{section}</NavLink>
          </li>
        );
      });
    };
    return (
      <React.Fragment>
        <nav>
          <div class="container-navigation">
            <NavLink to="/Home" style={{ textDecoration: "none" }}>
              <h2 className="logo">{this.props.logoTitle}</h2>
            </NavLink>
            <h2>Selectors/Controls</h2>
            <ul>{navLinks(selectors)}</ul>
            <h2>Actions</h2>
            <ul>{navLinks(actions)}</ul>
            <h2>Forms</h2>
            <ul>{navLinks(forms)}</ul>
            <h2>Drag-and-Drop</h2>
            <ul>{navLinks(dragAndDrop)}</ul>
            <h2>Files</h2>
            <ul>{navLinks(files)}</ul>
            <h2>Exception</h2>
            <ul>{navLinks(exception)}</ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
