import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function MicIcon(props: any) {
  return (
    <Svg
      width={props?.size ? props.size : 24}
      height={props?.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={8} y={2} width={8} height={13} rx={4} fill="#222" />
      <Path
        d="M5 11a7 7 0 1014 0M12 21v-2"
        stroke={props?.color ? props.color : "#222"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MicIcon;
