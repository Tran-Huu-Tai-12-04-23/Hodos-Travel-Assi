import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BagIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 46 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.752 13.77l2.415 15.985c.977 6.996-3.834 13.36-10.35 13.417H14.068c-6.401 0-11.27-6.421-10.235-13.417L6.248 13.77a10.753 10.753 0 0110.235-9.583h13.034a10.752 10.752 0 0110.235 9.583zm-7.878 26.47c2.058-.03 4-.962 5.31-2.55a9.353 9.353 0 002.088-7.513l-2.357-15.985a7.878 7.878 0 00-7.398-7.188H16.483a7.878 7.878 0 00-7.398 7.188L6.727 30.177a9.353 9.353 0 002.09 7.513 7.015 7.015 0 005.309 2.55h17.748z"
        fill={props?.color ? props.color : "#000"}
      />
      <Path
        d="M29.038 14.153c-.794 0-1.438.644-1.438 1.438a4.6 4.6 0 01-9.2 0 1.438 1.438 0 00-2.875 0 7.475 7.475 0 1014.95 0 1.457 1.457 0 00-1.438-1.438z"
        fill={props?.color ? props.color : "#000"}
      />
    </Svg>
  );
}

export default BagIcon;
