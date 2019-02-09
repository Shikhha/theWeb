import React, { Component } from "react";
import logo from "../logo.svg";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const selectors = ["Checkboxes", "Radiobuttons", "Slider"];
    const actions = ["Links", "Buttons"];
    const forms = ["Drop-downs", "Input", "Text-area", "Content-editable"];
    const dragAndDrop = ["drag-and-drop"];
    const files = ["File Upload", "File Download"];
    let navLinks = item => {
      return item.map(section => {
        return (
          <li>
            <a href={"#" + section}>{section}</a>
          </li>
        );
      });
    };
    return (
      <React.Fragment>
        <nav>
          <div class="container">
            <h2 className="logo">{this.props.logoTitle}</h2>
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
