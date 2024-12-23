import { normalize } from "@helper/helpers";
import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const CameraIcon = (props: any) => (
  <Svg
    width={normalize(40)}
    height={normalize(40)}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={30} height={30} rx={8} fill="#C211F8" fillOpacity={0.1} />
    <Path
      d="M14.9288 9.375C16.7453 9.375 18.0136 10.6268 18.0136 12.4207V17.5793C18.0136 19.3732 16.7453 20.625 14.9288 20.625H10.5848C8.76826 20.625 7.5 19.3732 7.5 17.5793V12.4207C7.5 10.6268 8.76826 9.375 10.5848 9.375H14.9288ZM20.9685 11.1592C21.2977 10.9917 21.684 11.0092 21.9982 11.2072C22.3125 11.4044 22.5 11.7471 22.5 12.1217V17.8788C22.5 18.2542 22.3125 18.596 21.9982 18.7932C21.8265 18.9006 21.6345 18.9554 21.441 18.9554C21.2797 18.9554 21.1185 18.9174 20.9677 18.8405L19.857 18.2801C19.446 18.0714 19.191 17.6526 19.191 17.1874V12.8123C19.191 12.3463 19.446 11.9275 19.857 11.7204L20.9685 11.1592Z"
      fill="#C211F8"
    />
  </Svg>
);
export default CameraIcon;
