import React from "react";
import { SideBar } from "./Elements/SideBar/SideBar.js";
import { DrawArea } from "./Elements/DrawArea/DrawArea.js";

const documentStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex"
};
export const App = () => {
  return (
    <>
      <div style={documentStyle}>
        <DrawArea />
        <SideBar />
      </div>
    </>
  );
};
