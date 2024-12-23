import { normalize } from "@helper/helpers";
import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const ImageIcon = (props: any) => (
  <Svg
    width={normalize(40)}
    height={normalize(40)}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={30} height={30} rx={8} fill="#F84E11" fillOpacity={0.1} />
    <Path
      d="M18.2504 7.5C20.7923 7.5 22.5 9.28358 22.5 11.9375V18.0625C22.5 20.7164 20.7923 22.5 18.2496 22.5H11.7496C9.20767 22.5 7.5 20.7164 7.5 18.0625V11.9375C7.5 9.28358 9.20767 7.5 11.7496 7.5H18.2504ZM19.0774 15.4125C18.2735 14.911 17.6528 15.6153 17.4854 15.8406C17.324 16.058 17.1852 16.298 17.0389 16.5379C16.6814 17.13 16.2719 17.8127 15.563 18.2098C14.5327 18.7802 13.7507 18.2546 13.188 17.8723C12.9769 17.7299 12.7717 17.5952 12.5673 17.5054C12.0635 17.2879 11.6103 17.5356 10.9376 18.3901C10.5846 18.8367 10.2347 19.2794 9.88019 19.7206C9.66826 19.9845 9.71879 20.3916 10.0046 20.5681C10.4609 20.8491 11.0175 21 11.6465 21H17.9673C18.324 21 18.6815 20.9512 19.0224 20.8398C19.7901 20.589 20.3995 20.0147 20.7178 19.2562C20.9863 18.6184 21.1168 17.8444 20.8656 17.2005C20.7819 16.9868 20.6567 16.7879 20.481 16.613C20.0202 16.1556 19.5895 15.7283 19.0774 15.4125ZM12.3741 10.5C11.3402 10.5 10.5 11.3413 10.5 12.375C10.5 13.4087 11.3402 14.25 12.3741 14.25C13.4074 14.25 14.2483 13.4087 14.2483 12.375C14.2483 11.3413 13.4074 10.5 12.3741 10.5Z"
      fill="#F84E11"
    />
  </Svg>
);
export default ImageIcon;