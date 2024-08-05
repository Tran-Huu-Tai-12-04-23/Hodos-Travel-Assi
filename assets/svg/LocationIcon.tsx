import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function LocationIcon(props: any) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.218 4.092C4 4.52 4 5.08 4 6.2v.614l17.99-1.636c-.019-.488-.07-.814-.208-1.086a2 2 0 00-.874-.874C20.48 3 19.92 3 18.8 3H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874zM22 7.186l-4.865.442 2.506 13.367c.592-.013.963-.058 1.267-.213a2 2 0 00.874-.874C22 19.48 22 18.92 22 17.8V7.186zM17.608 21L15.134 7.81 4 8.822V17.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C5.52 21 6.08 21 7.2 21h10.408zM13.5 15.03c0 2.158-2.14 3.674-3.073 4.233a.827.827 0 01-.854 0C8.64 18.704 6.5 17.188 6.5 15.029c0-2.117 1.696-3.529 3.5-3.529 1.867 0 3.5 1.412 3.5 3.53z"
        fill={props?.color ? props.color : "#222"}
      />
      <Circle
        cx={10}
        cy={15}
        r={1}
        fill={props?.color ? props.color : "#222"}
      />
    </Svg>
  );
}

export default LocationIcon;
