import React from "react";
import Anime, { anime } from "react-anime";

export const ReactAnime = (props) => {
  anime({
    targets: document.querySelector(".blue"),
    translateX: 270,
  });
  anime({
    targets: document.querySelector(".red"),
    translateX: [0, 270, 0, -270, 0],
  }); 
  return (
    <>
      <Anime
        easing="easeOutElastic"
        loop={true}
        duration={1000}
        direction="alternate"
        delay={(el, index) => index * 240}
        translateX="13rem"
        scale={[0.75, 0.9]}
      >
        <div
          className="blue"
          style={{ height: "100px", width: "100px", backgroundColor: "blue" }}
        />
        <div
          className="green"
          style={{ height: "100px", width: "100px", backgroundColor: "red" }}
        />
        <div
          className="red"
          style={{ height: "100px", width: "100px", backgroundColor: "green" }}
        />
      </Anime>
    </>
  );
};
