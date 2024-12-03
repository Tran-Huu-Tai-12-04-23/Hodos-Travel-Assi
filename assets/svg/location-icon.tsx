import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const LocationIcon = (props: any) => (
  <Svg
    width={props?.size || 16}
    height={props?.size || 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={8}
      cy={7.33334}
      r={2}
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
    />
    <Path
      d="M14 7.25927C14 10.5321 10.25 14.6667 8 14.6667C5.75 14.6667 2 10.5321 2 7.25927C2 3.98647 4.68629 1.33334 8 1.33334C11.3137 1.33334 14 3.98647 14 7.25927Z"
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
    />
  </Svg>
);
export default LocationIcon;
