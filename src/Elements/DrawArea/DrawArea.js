import React, { useEffect, useState } from "react";
const drawAreaStyle = {
  height: "100%",
  flexGrow: 1,
  backgroundColor: "green"
};
export const DrawArea = () => {
  const areaReference = React.createRef();
  const [p1, setP1] = useState(true);
  useEffect(() => {
    areaReference.current.addEventListener("click", () => {
      setP1(!p1);
      console.log(p1);
    });
  }, [areaReference]);
  return <div ref={areaReference} style={drawAreaStyle}></div>;
};
