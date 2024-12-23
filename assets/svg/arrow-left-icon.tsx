import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowLeftIcon = (props: any) => (
  <Svg
    width={props?.size || 24}
    height={props?.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4685 6.41431C14.7919 6.67307 14.8444 7.14504 14.5856 7.46849L10.9604 12L14.5856 16.5314C14.8444 16.8549 14.7919 17.3269 14.4685 17.5856C14.145 17.8444 13.6731 17.7919 13.4143 17.4685L9.41432 12.4685C9.19519 12.1946 9.19519 11.8054 9.41432 11.5314L13.4143 6.53145C13.6731 6.208 14.145 6.15556 14.4685 6.41431Z"
      fill={props?.color || "#1B1E28"}
    />
  </Svg>
);
export default ArrowLeftIcon;
