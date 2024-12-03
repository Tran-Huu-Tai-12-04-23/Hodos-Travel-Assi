import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageIcon = (props: any) => (
  <Svg
    width={props?.size || 25}
    height={props?.size ? props?.size - 1 : 24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 3.75003C7.49594 3.75003 4.25 6.99597 4.25 11C4.25 12.7632 4.87849 14.3777 5.92447 15.6345C6.08798 15.831 6.14017 16.0972 6.06294 16.3409L5.3245 18.6707L8.32803 17.7245C8.49239 17.6727 8.66957 17.6791 8.82976 17.7426C9.65514 18.0698 10.5556 18.25 11.5 18.25H13.5C17.5041 18.25 20.75 15.0041 20.75 11C20.75 6.99597 17.5041 3.75003 13.5 3.75003H11.5ZM2.75 11C2.75 6.16754 6.66751 2.25003 11.5 2.25003H13.5C18.3325 2.25003 22.25 6.16754 22.25 11C22.25 15.8325 18.3325 19.75 13.5 19.75H11.5C10.459 19.75 9.45896 19.5679 8.53108 19.2332L5.31646 20.2459C4.35115 20.55 3.4435 19.6408 3.74928 18.676L4.2381 18.831L3.74928 18.676L4.51265 16.2676C3.40646 14.8023 2.75 12.977 2.75 11Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M12.5 12C13.0523 12 13.5 11.5523 13.5 11C13.5 10.4477 13.0523 10 12.5 10C11.9477 10 11.5 10.4477 11.5 11C11.5 11.5523 11.9477 12 12.5 12Z"
      fill={props?.color || "#7D848D"}
    />
    <Path
      d="M16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z"
      fill={props?.color || "#7D848D"}
    />
  </Svg>
);
export default MessageIcon;