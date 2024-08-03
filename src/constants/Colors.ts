import { deviceWidth } from "@helper/utils";

const primaryColor = "#000";
const btnPrimary = "#000";
const secondaryColor = "rgba(0,0,0,0.1)";
const blackColor = "#000";
const whiteColor = "#fff";
const borderColor = "#E3EAEB";
const iconDefault = "#E3EAEB";
const mainBg = "#F5F5F5";
const labelColor = "#575E69";
const dangerColor = "#FF3F5B";
const inputColor = "white";
const hightLightColor = "#4FAE5A";
const priceColor = "#eb984e";

export {
  blackColor,
  borderColor,
  btnPrimary,
  dangerColor,
  hightLightColor,
  iconDefault,
  inputColor,
  labelColor,
  mainBg,
  priceColor,
  primaryColor,
  secondaryColor,
  whiteColor,
};

const SRC_WIDTH = deviceWidth;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

export { CARD_LENGTH, SIDECARD_LENGTH, SPACING, SRC_WIDTH };
