import React from "react";
import { SideBar } from "./Elements/SideBar/SideBar.js";
import { DrawArea } from "./Elements/DrawArea/DrawArea.js";

const DocumentStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex"
};
export class App extends React.Component {
  render() {
    return (
      <>
        <div style={DocumentStyle}>
          <DrawArea />
          <SideBar />
        </div>
      </>
    );
  }
}
