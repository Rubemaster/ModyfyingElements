import React from "react";
import { Line } from "./LineNMarker.js";
export class DispLineArray extends React.Component {
  componentDidUpdate() {
    console.log("Reload");
  }
  render() {
    return this.props.lineList.map((e, i) =>
      e.p1 && e.p2 ? Line(e.p1.x, e.p1.y, e.p2.x, e.p2.y, i) : null
    );
  }
}
