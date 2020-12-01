import React from "react";
const navigationStyle = {
  borderTop: "1px solid black",
  display: "flex",
  flexWrap: "wrap",
  paddingTop: 10
};
const fieldStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "2px 20px 10px 2px "
};
const inputStyle = {
  height: "100%",
  flexGrow: 1
};
const wrapThis = {
  position: "relative",
  top: 0,
  bottom: 0,
  width: "100%"
};
const labelStyle = {
  position: "relative",
  top: 2,
  margin: 0,
  paddingRight: 10,
  paddingLeft: 10
};
export const Navigation = (props) => {
  return (
    <div style={navigationStyle}>
      <div style={fieldStyle}>
        <p style={labelStyle}>X:</p>
        <div style={inputStyle}>
          <input
            type="number"
            step=".01"
            onChange={props.xChange}
            style={wrapThis}
          ></input>
        </div>
      </div>
      <div style={fieldStyle}>
        <p style={labelStyle}>Y:</p>
        <div style={inputStyle}>
          <input
            type="number"
            step=".01"
            onChange={(e) => console.log(e.target.value)}
            style={wrapThis}
          ></input>
        </div>
      </div>
    </div>
  );
};
