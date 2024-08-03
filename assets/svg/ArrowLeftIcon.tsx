import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeftIcon(props: any) {
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
        d="M4 12l-.707-.707-.707.707.707.707L4 12zm15 1a1 1 0 100-2v2zM9.293 5.293l-6 6 1.414 1.414 6-6-1.414-1.414zm-6 7.414l6 6 1.414-1.414-6-6-1.414 1.414zM4 13h15v-2H4v2z"
        fill={props?.color ? props.color : "#33363F"}
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
