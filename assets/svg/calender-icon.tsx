import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CalenderIcon = (props: any) => (
  <Svg
    width={props?.size || 25}
    height={props?.size ? props?.size - 1 : 24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.5 4.75003H6.5C4.70507 4.75003 3.25 6.20511 3.25 8.00003V18C3.25 19.795 4.70507 21.25 6.5 21.25H18.5C20.2949 21.25 21.75 19.795 21.75 18V8.00003C21.75 6.20511 20.2949 4.75003 18.5 4.75003Z"
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
    />
    <Path
      d="M7.25 2.75003V6.25003"
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.25 9.25003H20.75"
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18.25 2.75003V6.25003"
      stroke={props?.color || "#7D848D"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.75 14C9.16421 14 9.5 13.6642 9.5 13.25C9.5 12.8358 9.16421 12.5 8.75 12.5C8.33579 12.5 8 12.8358 8 13.25C8 13.6642 8.33579 14 8.75 14Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M12.75 14C13.1642 14 13.5 13.6642 13.5 13.25C13.5 12.8358 13.1642 12.5 12.75 12.5C12.3358 12.5 12 12.8358 12 13.25C12 13.6642 12.3358 14 12.75 14Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M16.75 14C17.1642 14 17.5 13.6642 17.5 13.25C17.5 12.8358 17.1642 12.5 16.75 12.5C16.3358 12.5 16 12.8358 16 13.25C16 13.6642 16.3358 14 16.75 14Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M8.75 18C9.16421 18 9.5 17.6642 9.5 17.25C9.5 16.8358 9.16421 16.5 8.75 16.5C8.33579 16.5 8 16.8358 8 17.25C8 17.6642 8.33579 18 8.75 18Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M12.75 18C13.1642 18 13.5 17.6642 13.5 17.25C13.5 16.8358 13.1642 16.5 12.75 16.5C12.3358 16.5 12 16.8358 12 17.25C12 17.6642 12.3358 18 12.75 18Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M16.75 18C17.1642 18 17.5 17.6642 17.5 17.25C17.5 16.8358 17.1642 16.5 16.75 16.5C16.3358 16.5 16 16.8358 16 17.25C16 17.6642 16.3358 18 16.75 18Z"
      fill={props?.color || "#7D848D"}
    />
  </Svg>
);
export default CalenderIcon;
