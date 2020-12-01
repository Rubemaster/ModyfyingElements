import React, { useState, useEffect } from "react";
import { Tools } from "./Tools.js";
import "./../../CSS/Fonts.css";
import { Button } from "./Button.js";
import { Navigation } from "./Navigation.js";
const sideBarStyle = {
  flexBasis: 200,
  height: "100%",
  borderLeft: "1px solid black",
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  background: "white"
};
const titleStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  borderBottom: "1px solid black"
};
const containsButtons = {
  display: "flex",
  flexWrap: "wrap",
  alignContent: "flex-start",
  flexGrow: 1,
  overflow: "scroll"
};
export const SideBar = () => {
  const [crumbs, setCrumbs] = useState([]);
  const [tools, setTools] = useState(Tools);

  const [goBack, setGoBack] = useState(true);
  useEffect(() => {
    setTools(Tools);
    crumbs.forEach((e1) => {
      setTools((e2) => {
        return { ...e2[e1] };
      });
    });
    if (crumbs.length === 0) {
      setGoBack(false);
    } else {
      setGoBack(true);
    }
  }, [crumbs]);
  return (
    <>
      <div style={sideBarStyle}>
        <h2
          style={Object.assign({}, titleStyle, {
            fontFamily: "'Nerko One', cursive",
            fontSize: 30
          })}
        >
          Tools
        </h2>
        <div style={containsButtons}>
          {goBack ? (
            <Button onClick={() => setCrumbs((e2) => [...e2.slice(0, -1)])}>
              Go back
            </Button>
          ) : (
            <></>
          )}
          {Object.keys(tools).map((e1, i) => (
            <Button
              key={parseInt(
                crumbs.length.toString() + "000" + i.toString(),
                10
              )}
              onClick={() => setCrumbs((e2) => [...e2, e1])}
            >
              {e1.split("_").join(" ")}
            </Button>
          ))}
        </div>
        <Navigation xChange={(e) => console.log(e.target.value)} />
      </div>
    </>
  );
};
