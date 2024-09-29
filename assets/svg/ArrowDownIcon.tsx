import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDownIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.75C12.4142 1.75 12.75 2.08579 12.75 2.5L12.75 20.5007C12.75 20.9149 12.4142 21.2507 12 21.2507C11.5858 21.2507 11.25 20.9149 11.25 20.5007L11.25 2.5C11.25 2.08579 11.5858 1.75 12 1.75Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5761 16.0201C18.8413 16.3383 18.7983 16.8112 18.4801 17.0764L12.8002 21.8099C12.3367 22.1962 11.6633 22.1962 11.1997 21.8099L5.51983 17.0764C5.20163 16.8112 5.15864 16.3383 5.42382 16.0201C5.689 15.7019 6.16193 15.6589 6.48013 15.9241L12 20.5242L17.5198 15.9241C17.838 15.6589 18.311 15.7019 18.5761 16.0201Z"
      fill="black"
    />
  </Svg>
);
export default ArrowDownIcon;
