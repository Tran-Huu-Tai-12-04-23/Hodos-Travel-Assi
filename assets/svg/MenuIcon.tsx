import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MenuIcon(props: any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 7h14M5 12h10M5 17h6"
        stroke={props?.color ? props.color : "#33363F"}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default MenuIcon;
