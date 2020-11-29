import React from "react";
class lineBase {
  constructor() {
    this.position = "absolute";
    this.top = 0;
    this.left = 0;
    this.borderTop = "1px solid black";
    this.transformOrigin = "top left";
    this.transform = "rotate(45deg)";
    this.width = 100;
  }
}
class markerBase {
  constructor() {
    this.position = "absolute";
    this.height = 15;
    this.width = 15;
    this.border = "1px solid black";
    this.transform = "translate(-50%,-50%)";
    this.top = 0;
    this.left = 0;
  }
}
const getRotate = (x1, y1, x2, y2) =>
  "rotate(" + String((Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI) + "deg)";
export const Line = (x1, y1, x2, y2, i) => (
  <div
    key={i}
    style={Object.assign(new lineBase(), {
      left: x1,
      top: y1,
      transform: getRotate(x1, y1, x2, y2),
      width: Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    })}
  ></div>
);
export const Marker = (x1, y1, i) => (
  <div
    key={i}
    style={Object.assign(new markerBase(), {
      left: x1,
      top: y1
    })}
  ></div>
);
