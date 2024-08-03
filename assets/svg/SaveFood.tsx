import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SaveFoodIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h3.127c.92 0 1.381 0 1.785.189.403.189.698.543 1.287 1.25l1.667 2c1.02 1.225 1.53 1.837 1.53 2.561s-.51 1.336-1.53 2.56l-1.667 2c-.59.709-.884 1.062-1.287 1.251-.404.189-.864.189-1.786.189H9c-1.886 0-2.828 0-3.414-.586C5 16.828 5 15.886 5 14v-4z"
        fill={props?.color ? props.color : "#222"}
      />
    </Svg>
  );
}

export default SaveFoodIcon;
