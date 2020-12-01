import React, { useEffect, useState, useRef } from "react";
import { Refs } from "./../../PublicConfig/Refs.js";
import { NewLine } from "./NewLine.js";
import { DispLineArray } from "./DispLineArray.js";
const drawAreaStyle = {
  height: "100%",
  flexGrow: 1,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start"
};
const infoStyle = { margin: 5 };
export const DrawArea = () => {
  const [p1, setP1] = useState(true);
  const [lP, setLP] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState([]);
  const infRef = useRef(null);
  useEffect(() => {
    Refs.drawArea.current.addEventListener("click", (e1) => {
      const position = { x: e1.clientX, y: e1.clientY };
      setLines((e2) =>
        e2.length > 0 && !e2[e2.length - 1].p2
          ? [
              ...e2.slice(0, -1),
              Object.assign(e2[e2.length - 1], { p2: position })
            ]
          : [...e2, { p1: position }]
      );
      setLP((e2) => {
        return { ...position };
      });
      setP1((e2) => !e2);
    });
  }, []);
  return (
    <div ref={Refs.drawArea} style={drawAreaStyle}>
      <NewLine p1={p1} lp={lP} infRef={infRef} />
      <DispLineArray lineList={lines} />
      <p ref={infRef} style={infoStyle}>
        stuff information things
      </p>
    </div>
  );
};
