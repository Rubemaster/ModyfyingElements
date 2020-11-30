import React from "react";
import { Tools } from "./Tools.js";
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
    this.position = "relative";
    this.width = "100%";
    this.height = 40;
    this.display = "flex";
    this.alignItems = "center";
    this.justifyContent = "center";
    this.top = 0;
    this.margin = 0;
    this.fontFamily = "sans-serif";
    this.fontSize = 20;
  }
}
class ButtonStyle extends React.Component {
  constructor() {
    super();
    this.flexGrow = 1;
    this.margin = 5;
    this.height = 40;
    this.filter = "drop-shadow(0 0 3px crimson)";
  }
}
class BreakerBreaker19 extends React.Component {
  constructor() {
    super();
    this.flexBasis = "100%";
    this.height = 0;
  }
}
class ButtonContainer extends React.Component {
  constructor() {
    super();
    this.position = "absolute";
    this.top = 40;
    this.bottom = 0;
    this.width = "100%";
    this.display = "flex";
    this.flexWrap = "wrap";
    this.alignContent = "flex-start";
  }
}
export class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //console.log("sidebar rendering");
  }
  render() {
    return (
      <>
        <div style={new SideBarStyle()}>
          <h2
            style={Object.assign(new TitleStyle(), {
              height: 40,
              fontFamily: "'Nerko One', cursive",
              fontSize: 30
            })}
          >
            Tools
          </h2>
          <div style={new ButtonContainer()}>
            {Object.keys(Tools).map((e) => (
              <>
                <button style={new ButtonStyle()}>{e}</button>
                <div style={new BreakerBreaker19()}></div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
