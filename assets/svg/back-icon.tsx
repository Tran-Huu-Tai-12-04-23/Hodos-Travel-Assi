import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = (props: any) => (
  <Svg
    width={8}
    height={16}
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46849 0.414315C5.79194 0.673072 5.84438 1.14504 5.58562 1.46849L1.96044 5.99997L5.58562 10.5314C5.84438 10.8549 5.79194 11.3269 5.46849 11.5856C5.14505 11.8444 4.67308 11.7919 4.41432 11.4685L0.414321 6.46849C0.195189 6.19457 0.195189 5.80536 0.414321 5.53145L4.41432 0.531445C4.67308 0.207999 5.14505 0.155558 5.46849 0.414315Z"
      fill={props?.color || "#1B1E28"}
    />
  </Svg>
);
export default BackIcon;
