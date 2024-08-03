import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SearchIcon(props: any) {
  return (
    <Svg
      width={props?.size ? props.size : 24}
      height={props?.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={11}
        cy={11}
        r={7}
        stroke={props?.color ? props.color : "#33363F"}
        strokeWidth={2}
      />
      <Path
        d="M20 20l-3-3"
        stroke={props?.color ? props.color : "#33363F"}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SearchIcon;
