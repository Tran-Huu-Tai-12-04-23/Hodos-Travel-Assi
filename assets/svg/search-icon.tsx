import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SearchIcon = (props: any) => (
  <Svg
    width={props?.size | 19}
    height={props?.size | 19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={8.94134}
      cy={8.94142}
      r={7.94134}
      stroke={props?.color || "white"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.0003 18.0001L15.0009 15.0007"
      stroke={props?.color || "white"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchIcon;
