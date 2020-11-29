import React from "react";
import { NewLine } from "./Elements/NewLine.js";
import { DispLineArray } from "./Elements/DispLineArray.js";
import { SideBar } from "./Elements/SideBar.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Hot shit
      p: {
        p1: true,
        lp: { x: 0, y: 0 }
      },
      lineList: []
    };
  }
  componentDidMount() {
    document.addEventListener("click", (e) => {
      let newList = this.state.lineList;
      if (this.state.p.p1) {
        newList.push({ p1: { x: e.clientX, y: e.clientY } });
      } else {
        newList[newList.length - 1]["p2"] = {
          x: e.clientX,
          y: e.clientY
        };
      }
      let pos = this.state.p;
      pos.lp.x = e.clientX;
      pos.lp.y = e.clientY;
      pos.p1 = !pos.p1;
      pos.p2 = !pos.p2;
      this.setState({ p: pos, lineList: newList });
    });
  }
  render() {
    return (
      <>
        <DispLineArray lineList={this.state.lineList} />
        <NewLine p1={this.state.p.p1} p={this.state.p} lp={this.state.p.lp} />
        <SideBar />
      </>
    );
  }
}
