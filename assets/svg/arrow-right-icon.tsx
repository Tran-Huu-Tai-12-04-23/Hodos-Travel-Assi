import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRightIcon = (props: any) => (
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
      d="M9.53151 6.41431C9.20806 6.67307 9.15562 7.14504 9.41438 7.46849L13.0396 12L9.41438 16.5314C9.15562 16.8549 9.20806 17.3269 9.53151 17.5856C9.85495 17.8444 10.3269 17.7919 10.5857 17.4685L14.5857 12.4685C14.8048 12.1946 14.8048 11.8054 14.5857 11.5314L10.5857 6.53145C10.3269 6.208 9.85495 6.15556 9.53151 6.41431Z"
      fill={props?.color || "#1B1E28"}
    />
  </Svg>
);
export default ArrowRightIcon;