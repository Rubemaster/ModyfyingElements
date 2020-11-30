import React from "react";
import { Tools } from "./Tools.js";
import { Button } from "./Button.js";
import "./../../CSS/Fonts.css";
class SideBarStyle extends React.Component {
  constructor() {
    super();
    this.flexBasis = 200;
    this.zIndex = 10;
    this.height = "100%";
    this.borderLeft = "1px solid black";
    this.background = "white";
    this.display = "flex";
    this.flexDirection = "column";
  }
}
class TitleStyle extends React.Component {
  constructor(height, font) {
    super();
    this.height = 40;
    this.display = "flex";
    this.alignItems = "center";
    this.justifyContent = "center";
    this.margin = 0;
    this.fontFamily = "sans-serif";
    this.fontSize = 20;
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
    this.display = "flex";
    this.flexGrow = 1;
    this.flexWrap = "wrap";
    this.alignContent = "flex-start";
    this.overflow = "scroll";
  }
}
const recursiveSearch = (object1, targetArray) => {
  let e = object1;
  for (let i1 = 0; i1 < targetArray.length; i1++) {
    e = e[targetArray[i1]];
  }
  return e;
};
export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: recursiveSearch(Tools, ["Shapes"]),
      breadcrumb: ["Shapes"]
    };
  }
  componentDidMount() {
    //console.log(recursiveSearch(Tools, ["Shapes", "Square"]));
    //console.log("sidebar rendering");
  }
  final() {}
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
            {Object.keys(this.state.buttons).map((e) => (
              <>
                <Button />
                <div style={new BreakerBreaker19()}></div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
