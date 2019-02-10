import React, { Component } from "react";
import logo from "../logo.svg";
import "../scss/Navigation.css";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
  render() {
    const selectors = ["Checkbox", "Radiobuttons", "Slider"];
    const actions = ["Links", "Buttons"];
    const forms = ["Drop-downs", "Input", "Text-area", "Content-editable"];
    const dragAndDrop = ["Drag"];
    const files = ["File Upload", "File Download"];
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
          <div class="container">
            <NavLink to="/home">
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
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
