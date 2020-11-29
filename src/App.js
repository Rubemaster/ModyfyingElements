import React from "react";
import "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freakyStyle: {
        position: "absolute",
        top: 0,
        left: 0,
        borderTop: "1px solid black",
        transformOrigin: "top left",
        transform: "rotate(45deg)",
        width: 100
      } //Hot shit
    };
    this.line = this.line.bind(this);
    this.line(0, 0, 100, 100);
  }
  componentDidMount() {
    document.onmousemove = (e) => {
      let x2 = e.clientX,
        y2 = e.clientY;
      let changeDis = this.state.freakyStyle;
      changeDis.transform =
        "rotate(" + String((Math.atan2(y2, x2) * 180) / Math.PI) + "deg)";
      changeDis.width = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
      this.setState({ freakyStyle: changeDis });
    };
  }
  line(x1, y1, x2, y2) {
    let changeDis = this.state.freakyStyle;
    changeDis.top = y1;
    changeDis.left = x1;
    changeDis.transform =
      "rotate(" +
      String((Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI) +
      "deg)";
    changeDis.width = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    this.setState({ freakyStyle: changeDis });
  }
  render() {
    return <div style={this.state.freakyStyle}></div>;
  }
}
