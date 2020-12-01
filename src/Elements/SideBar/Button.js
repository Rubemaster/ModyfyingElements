import React, { useState, useEffect, useRef } from "react";
const buttonStyle = {
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  paddingRight: 5,
  paddingLeft: 5,
  borderBottom: "1px solid black",
  width: "100%"
};
const textStyle = {
  paddingTop: 1,
  paddingBottom: 1,
  flexGrow: 1,
  display: "flex",
  flexWrap: "wrap",
  paddingRight: 10
};
export const Button = (props) => {
  // Declare a new state variable, which we'll call "count"

  const [pressed, setPressed] = useState(false);
  const [over, setOver] = useState(false);
  const button = useRef(0);
  useEffect(() => {
    button.current.addEventListener("mousedown", () => {
      setPressed(true);
    });
    button.current.addEventListener("mouseup", () => {
      setPressed(false);
    });
    button.current.addEventListener("mouseover", () => {
      setOver(true);
    });
    button.current.addEventListener("mouseout", () => {
      setOver(false);
    });
  }, []);
  return (
    <>
      <div
        onClick={props.onClick}
        ref={button}
        style={Object.assign(
          {},
          buttonStyle,
          pressed
            ? {
                background: "RGB(27, 38, 59)",
                color: "white"
              }
            : {},
          over ? { paddingTop: 10, paddingBottom: 10 } : {}
        )}
      >
        <div style={textStyle}>{props.children} </div>
        {">"}
      </div>
    </>
  );
};
