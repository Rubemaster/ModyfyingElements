import React, { useState, useEffect } from "react";
import { Line, Marker } from "./LineNMarker.js";
export const NewLine = (props) => {
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(
    () => (document.onmousemove = (e) => setP({ x: e.clientX, y: e.clientY })),
    []
  );
  useEffect(() => {
    props.infRef.current.innerHTML =
      "[START] X:" +
      (props.p1
        ? p.x + "mm Y:" + p.y + "mm "
        : props.lp.x +
          "mm Y:" +
          props.lp.y +
          "mm </br>[END] X: " +
          p.x +
          "mm Y: " +
          p.y +
          "mm</br> DISTANCE=" +
          Math.round(
            Math.sqrt(
              Math.pow(p.x - props.lp.x, 2) + Math.pow(p.y - props.lp.y, 2)
            )
          ) +
          "mm ANGLE=" +
          Math.round(
            -(Math.atan2(p.y - props.lp.y, p.x - props.lp.x) * 1800) / Math.PI
          ) /
            10);
  }, [p, props.infRef, props.p1, props.lp]);
  return props.p1 ? Marker(p.x, p.y) : Line(props.lp.x, props.lp.y, p.x, p.y);
};
