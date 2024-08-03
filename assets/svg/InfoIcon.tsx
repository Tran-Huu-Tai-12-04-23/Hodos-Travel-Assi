import * as React from "react";
import Svg, { Path } from "react-native-svg";

function InfoIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 110-18 9 9 0 010 18zm0-14a1 1 0 100 2h.01a1 1 0 100-2H12zm-1.5 4a1 1 0 100 2h.5v3a1 1 0 001 1h2a1 1 0 100-2h-1v-3a1 1 0 00-1-1h-1.5z"
        fill={props?.color ? props.color : "#222"}
      />
    </Svg>
  );
}

export default InfoIcon;
