import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function LocationOutIcon(props: any) {
  return (
    <Svg
      width={props?.size ? props.size : 24}
      height={props?.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_489_191394)">
        <Path
          d="M18 8.953a8.93 8.93 0 01-.892 3.89l-2.105 4.351c-1.03 2.128-1.545 3.192-2.276 3.477a2 2 0 01-1.454 0c-.731-.285-1.246-1.349-2.276-3.477l-2.105-4.352A8.93 8.93 0 016 8.953v0C6 5.665 8.712 3 12 3v0c3.288 0 6 2.665 6 5.953v0z"
          stroke={props?.color ? props.color : "#fff"}
          strokeWidth={2}
        />
        <Path
          d="M14 9a2 2 0 11-4 0 2 2 0 014 0z"
          fill={props?.color ? props.color : "#fff"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_489_191394">
          <Path fill={props?.color ? props.color : "#fff"} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LocationOutIcon;
