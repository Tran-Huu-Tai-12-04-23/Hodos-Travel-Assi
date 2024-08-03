import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MapIcon(props: any) {
  return (
    <Svg
      width={props?.size ? props.size : 24}
      height={props?.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5.877a1 1 0 00-1.371-.928l-2 .8A1 1 0 003 6.677v11.846a1 1 0 001.371.928l2-.8A1 1 0 007 17.723V5.877zm2 11.592a1 1 0 00.757.97l4 1A1 1 0 0015 18.47V6.531a1 1 0 00-.758-.97l-4-1A1 1 0 009 5.53v11.938zm8.629-12.12a1 1 0 00-.629.928v11.846a1 1 0 001.371.928l2-.8a1 1 0 00.629-.928V5.477a1 1 0 00-1.371-.928l-2 .8z"
        fill={props?.color ? props.color : "#33363F"}
      />
    </Svg>
  );
}

export default MapIcon;
