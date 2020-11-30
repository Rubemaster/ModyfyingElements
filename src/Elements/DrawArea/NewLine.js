import React from "react";
import { Line, Marker } from "./LineNMarker.js";
export class NewLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Hot shit
      p: {
        x: 0,
        y: 0
      }
    };
    this.getPostion = () => this.state.p;
  }
  componentDidMount() {
    document.onmousemove = (e) => {
      let pos = this.state.p;
      pos.x = e.clientX;
      pos.y = e.clientY;
      this.setState({ p: pos });
    };
  }
  render() {
    return this.props.p1
      ? Marker(this.state.p.x, this.state.p.y)
      : Line(this.props.lp.x, this.props.lp.y, this.state.p.x, this.state.p.y);
  }
}
