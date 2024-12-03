import * as React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
const ProfileIcon = (props: any) => (
  <Svg
    width={props?.size || 25}
    height={props?.size ? props?.size - 1 : 24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      cx={12.5}
      cy={17.5}
      rx={7}
      ry={3.5}
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Circle
      cx={12.5}
      cy={7.00003}
      r={4}
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default ProfileIcon;
