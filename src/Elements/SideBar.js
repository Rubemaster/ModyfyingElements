import React from "react";
import "./../CSS/Fonts.css";
class SideBarStyle extends React.Component {
  constructor() {
    super();
    this.position = "fixed";
    this.right = 0;
    this.top = 0;
    this.width = 200;
    this.height = "100%";
    this.borderLeft = "1px solid black";
    this.background = "white";
  }
}
class TitleStyle extends React.Component {
  constructor(height, font) {
    super();
    this.position = "absolute";
    this.width = "100%";
    this.height = height ? height : 40;
    this.display = "flex";
    this.alignItems = "center";
    this.justifyContent = "center";
    this.top = 0;
    this.margin = 0;
    this.fontFamily = font ? font : "sans-serif";
  }
}
export class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("sidebar rendering");
  }
  render() {
    return (
      <>
        <div style={new SideBarStyle()}>
          <h2 style={new TitleStyle(40, "font-family: 'Nerko One', cursive")}>
            Tools
          </h2>
        </div>
      </>
    );
  }
}
