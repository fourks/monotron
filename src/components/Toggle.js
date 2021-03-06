// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  name: string,
  position: number
};

/**
 * Toggle Component.
 */
export default function Toggle({ name, position }: Props) {
  const className = classNames(`POINTER_TARGET-toggle-${name}`, "toggle", name);

  const switchStyle = {
    transform: position ? "translate(0px, 0px)" : "translate(0px, -10px)"
  };

  return (
    <g className={className}>
      {/* transparent rect covering the knob area */}
      <rect
        x="50"
        y="360"
        fill="#2C2C2E"
        width="85"
        height="67"
        fillOpacity="0"
      />

      <g className="toggle-text">
        <path
          fill="#F0F0F2"
          d="M78.7,378.2l1.6-0.2c0.1,0.6,0.3,1,0.6,1.2c0.3,0.3,0.7,0.4,1.2,0.4s0.9-0.1,1.2-0.4s0.4-0.5,0.4-0.8  c0-0.2-0.1-0.4-0.2-0.5s-0.3-0.3-0.6-0.4c-0.2-0.1-0.6-0.2-1.3-0.4c-0.9-0.2-1.5-0.5-1.9-0.8c-0.5-0.5-0.8-1-0.8-1.7  c0-0.4,0.1-0.8,0.4-1.2s0.6-0.7,1-0.9s1-0.3,1.6-0.3c1,0,1.8,0.2,2.3,0.7s0.8,1.1,0.8,1.9l-1.7,0.1c-0.1-0.4-0.2-0.8-0.5-1  s-0.6-0.3-1.1-0.3s-0.9,0.1-1.1,0.3c-0.2,0.1-0.3,0.3-0.3,0.5s0.1,0.4,0.2,0.5c0.2,0.2,0.7,0.4,1.5,0.6s1.4,0.4,1.8,0.6  s0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.4c0,0.5-0.1,1-0.4,1.4s-0.6,0.7-1.1,1s-1.1,0.3-1.8,0.3c-1,0-1.8-0.3-2.4-0.8  S78.8,379.2,78.7,378.2z"
        />
        <path
          fill="#F0F0F2"
          d="M88.6,381v-7.1h-2.4v-1.5h6.5v1.5h-2.4v7.1H88.6z"
        />
        <path
          fill="#F0F0F2"
          d="M100.4,381h-1.8l-0.7-2h-3.3l-0.7,2h-1.8l3.2-8.6h1.8L100.4,381z M97.3,377.6l-1.1-3.2l-1.1,3.2H97.3z"
        />
        <path
          fill="#F0F0F2"
          d="M101.3,381v-8.6h1.6l3.4,5.7v-5.7h1.5v8.6h-1.7l-3.3-5.6v5.6H101.3z"
        />
        <path
          fill="#F0F0F2"
          d="M109.5,372.4h3c0.7,0,1.2,0.1,1.6,0.2c0.5,0.1,0.9,0.4,1.2,0.8s0.6,0.8,0.8,1.4s0.3,1.2,0.3,2  c0,0.7-0.1,1.3-0.3,1.8c-0.2,0.6-0.5,1.1-0.9,1.5c-0.3,0.3-0.7,0.5-1.2,0.7c-0.4,0.1-0.9,0.2-1.5,0.2h-3.1L109.5,372.4L109.5,372.4  z M111.2,373.8v5.7h1.2c0.5,0,0.8,0,1-0.1c0.3-0.1,0.5-0.2,0.7-0.4s0.3-0.4,0.4-0.8s0.2-0.9,0.2-1.6s-0.1-1.2-0.2-1.5  s-0.3-0.6-0.5-0.8s-0.5-0.3-0.8-0.4c-0.2-0.1-0.7-0.1-1.4-0.1L111.2,373.8L111.2,373.8z"
        />
        <path
          fill="#F0F0F2"
          d="M117.9,372.4h3.3c0.7,0,1.1,0,1.5,0.1c0.3,0.1,0.6,0.2,0.9,0.4c0.3,0.2,0.5,0.4,0.6,0.7s0.3,0.6,0.3,1  s-0.1,0.8-0.3,1.1c-0.2,0.3-0.5,0.6-0.8,0.8c0.5,0.2,0.9,0.4,1.2,0.8s0.4,0.8,0.4,1.3c0,0.4-0.1,0.8-0.3,1.1  c-0.2,0.4-0.4,0.7-0.7,0.9s-0.7,0.4-1.1,0.4c-0.3,0-0.9,0.1-2,0.1h-2.8v-8.7L117.9,372.4L117.9,372.4z M119.5,373.8v2h1.1  c0.6,0,1,0,1.2,0c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.6c-0.1-0.2-0.3-0.3-0.6-0.3  c-0.2,0-0.6,0-1.4,0h-1C119.5,373.9,119.5,373.8,119.5,373.8z M119.5,377.2v2.3h1.5c0.6,0,1,0,1.1-0.1c0.2,0,0.4-0.2,0.6-0.3  s0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.7s-0.3-0.3-0.5-0.4s-0.7-0.1-1.5-0.1L119.5,377.2L119.5,377.2z"
        />
        <path
          fill="#F0F0F2"
          d="M128.3,381v-3.6l-3-5h1.9l1.9,3.4l1.9-3.4h1.9l-3,5v3.6H128.3z"
        />
        <path
          fill="#F0F0F2"
          d="M81.2,399l-2.9-8.6h1.8l2.1,6.4l2-6.4H86l-3,8.6H81.2z"
        />
        <path
          fill="#F0F0F2"
          d="M92,395.8l1.6,0.5c-0.2,0.9-0.7,1.6-1.2,2.1c-0.6,0.5-1.3,0.7-2.2,0.7c-1.1,0-2-0.4-2.7-1.2  s-1.1-1.8-1.1-3.2c0-1.4,0.4-2.5,1.1-3.3s1.6-1.2,2.8-1.2c1,0,1.8,0.3,2.5,0.9c0.4,0.4,0.7,0.9,0.8,1.6l-1.6,0.4  c-0.1-0.4-0.3-0.8-0.6-1.1s-0.7-0.4-1.1-0.4c-0.6,0-1.1,0.2-1.5,0.7s-0.6,1.2-0.6,2.2c0,1.1,0.2,1.9,0.6,2.3s0.9,0.7,1.5,0.7  c0.4,0,0.8-0.1,1.1-0.4C91.7,396.9,91.9,396.4,92,395.8z"
        />
        <path
          fill="#F0F0F2"
          d="M94.7,394.7c0-0.9,0.1-1.6,0.4-2.2c0.2-0.4,0.4-0.8,0.8-1.2s0.7-0.6,1.1-0.8c0.5-0.2,1.1-0.3,1.8-0.3  c1.2,0,2.2,0.4,2.9,1.2c0.7,0.8,1.1,1.9,1.1,3.3s-0.4,2.5-1.1,3.3s-1.7,1.2-2.9,1.2c-1.2,0-2.2-0.4-2.9-1.2S94.7,396.1,94.7,394.7z   M96.5,394.7c0,1,0.2,1.7,0.6,2.2s1,0.8,1.6,0.8c0.7,0,1.2-0.2,1.6-0.7s0.6-1.2,0.6-2.2s-0.2-1.7-0.6-2.2s-1-0.7-1.6-0.7  c-0.7,0-1.2,0.2-1.7,0.7S96.5,393.7,96.5,394.7z"
        />
        <path
          fill="#F0F0F2"
          d="M107.7,399h-1.6v-6.2c-0.6,0.6-1.3,1-2,1.2v-1.5c0.4-0.1,0.9-0.4,1.3-0.8s0.8-0.9,1-1.4h1.3  C107.7,390.3,107.7,399,107.7,399z"
        />
        <path
          fill="#F0F0F2"
          d="M81.2,417l-2.9-8.6h1.8l2.1,6.4l2-6.4H86l-3,8.6H81.2z"
        />
        <path
          fill="#F0F0F2"
          d="M92,413.8l1.6,0.5c-0.2,0.9-0.7,1.6-1.2,2.1c-0.6,0.5-1.3,0.7-2.2,0.7c-1.1,0-2-0.4-2.7-1.2  s-1.1-1.8-1.1-3.2c0-1.4,0.4-2.5,1.1-3.3s1.6-1.2,2.8-1.2c1,0,1.8,0.3,2.5,0.9c0.4,0.4,0.7,0.9,0.8,1.6l-1.6,0.4  c-0.1-0.4-0.3-0.8-0.6-1.1s-0.7-0.4-1.1-0.4c-0.6,0-1.1,0.2-1.5,0.7s-0.6,1.2-0.6,2.2c0,1.1,0.2,1.9,0.6,2.3s0.9,0.7,1.5,0.7  c0.4,0,0.8-0.1,1.1-0.4C91.7,414.9,91.9,414.4,92,413.8z"
        />
        <path
          fill="#F0F0F2"
          d="M94.7,412.7c0-0.9,0.1-1.6,0.4-2.2c0.2-0.4,0.4-0.8,0.8-1.2s0.7-0.6,1.1-0.8c0.5-0.2,1.1-0.3,1.8-0.3  c1.2,0,2.2,0.4,2.9,1.2c0.7,0.8,1.1,1.9,1.1,3.3s-0.4,2.5-1.1,3.3s-1.7,1.2-2.9,1.2c-1.2,0-2.2-0.4-2.9-1.2S94.7,414.1,94.7,412.7z   M96.5,412.7c0,1,0.2,1.7,0.6,2.2s1,0.8,1.6,0.8c0.7,0,1.2-0.2,1.6-0.7s0.6-1.2,0.6-2.2s-0.2-1.7-0.6-2.2s-1-0.7-1.6-0.7  c-0.7,0-1.2,0.2-1.7,0.7S96.5,411.7,96.5,412.7z"
        />
        <path
          fill="#F0F0F2"
          d="M107.7,417h-1.6v-6.2c-0.6,0.6-1.3,1-2,1.2v-1.5c0.4-0.1,0.9-0.4,1.3-0.8s0.8-0.9,1-1.4h1.3  C107.7,408.3,107.7,417,107.7,417z"
        />
        <path
          fill="#F0F0F2"
          d="M112.2,415.7v-2.2H110V412h2.2v-2.2h1.4v2.2h2.2v1.5h-2.2v2.2H112.2z"
        />
        <path
          fill="#F0F0F2"
          d="M122.1,415.4v1.5h-5.5c0.1-0.6,0.2-1.1,0.5-1.6s0.9-1.2,1.8-2.1c0.7-0.7,1.1-1.2,1.3-1.4  c0.2-0.3,0.3-0.7,0.3-1c0-0.4-0.1-0.6-0.3-0.8s-0.5-0.3-0.8-0.3s-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.6-0.3,1l-1.6-0.2  c0.1-0.9,0.4-1.6,0.9-2s1.1-0.6,1.9-0.6s1.5,0.2,1.9,0.7c0.5,0.5,0.7,1,0.7,1.7c0,0.4-0.1,0.8-0.2,1.1s-0.3,0.7-0.6,1.1  c-0.2,0.3-0.5,0.6-1,1.1s-0.8,0.8-0.9,0.9s-0.2,0.3-0.3,0.5L122.1,415.4L122.1,415.4z"
        />
      </g>
      <rect
        x="51.1"
        y="373.7"
        fill="#FFFFFF"
        stroke="#414042"
        strokeMiterlimit="10"
        width="20.7"
        height="40.3"
      />
      <rect
        x="53.8"
        y="378.3"
        fill="#414042"
        stroke="#414042"
        strokeMiterlimit="10"
        width="15.3"
        height="30.9"
      />

      <g className="switch" style={switchStyle}>
        <rect
          x="53.8"
          y="398.6"
          fill="#FFFFFF"
          stroke="#414042"
          strokeMiterlimit="10"
          width="15.3"
          height="10.5"
        />
        <line
          fill="none"
          stroke="#414042"
          strokeMiterlimit="10"
          x1="53.8"
          y1="401.1"
          x2="69.3"
          y2="401.1"
        />
        <line
          fill="none"
          stroke="#414042"
          strokeMiterlimit="10"
          x1="53.8"
          y1="403.8"
          x2="69.3"
          y2="403.8"
        />
        <line
          fill="none"
          stroke="#414042"
          strokeMiterlimit="10"
          x1="53.8"
          y1="406.5"
          x2="69.3"
          y2="406.5"
        />
      </g>
    </g>
  );
}
