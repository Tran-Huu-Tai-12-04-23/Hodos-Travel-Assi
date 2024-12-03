import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BookmarkIcon = (props: any) => (
  <Svg
    width={props?.size || 15}
    height={props?.size ? props?.size + 3 : 18}
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.00012 4C1.00012 2.34315 2.34327 1 4.00012 1H10.9525C12.6094 1 13.9525 2.34315 13.9525 4V15.5858C13.9525 16.4767 12.8754 16.9229 12.2454 16.2929L8.89053 12.938C8.10948 12.157 6.84315 12.157 6.0621 12.938L2.70723 16.2929C2.07726 16.9229 1.00012 16.4767 1.00012 15.5858V4Z"
      stroke={props?.color || "white"}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookmarkIcon;
