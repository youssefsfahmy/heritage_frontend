import React from "react";
import "../../CSS/Homepage/Animation.css";
export default function Animation() {
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern
          id="polka-dots"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
        </pattern>
      </defs>

      <text x="50%" y="60%" text-anchor="middle">
        Let us Guide you Home
      </text>
    </svg>
  );
}
