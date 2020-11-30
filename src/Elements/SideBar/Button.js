import React, { useState, useEffect } from "react";

const ButtonStyle = (changes) =>
  Object.assign(
    {
      flexGrow: 1,
      margin: 10,
      height: 40
    },
    changes
  );
export function Button() {
  // Declare a new state variable, which we'll call "count"

  const [pressed, setPressed] = useState(false);
  this.button = React.createRef();
  useEffect(() => {
    this.button.current.addEventListener("click", () => {
      console.log("down");
      setPressed(true);
    });
    this.button.current.addEventListener("mouseup", () => {
      setPressed(false);
    });
  });
  return (
    <>
      <button ref={this.button} style={ButtonStyle()}>
        {pressed ? "what" : "now"}
      </button>
    </>
  );
}
