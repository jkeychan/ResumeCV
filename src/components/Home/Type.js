import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Security",
          "Threat Detection",
          "Incident Response",
          "Technologist",
          "Leader",
          "Creator",
          "Homesteader",
          "Music Player",
          "Mentor",
          "Advisor",
          "Explorer",
          "Bon Vivant",
          "Hobby Hacker",
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 15,
      }}
    />
  );
}

export default Type;
