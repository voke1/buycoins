import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#9A7BD5",
  secondary: "#F7F5FA",
  main: "#E5E5E5",
  bodyMain: "rgba(0,0,0,0.1)",

  white: "#fff",
  lightGreen: "#4BEE70",
  red: "#D84035",
  black: "#000000",
  gray: "#212125",
  gray1: "#1f1f1f",
  lightGray: "#E6E6E6",
  lightGray2: "#212125",
  lightGray3: "#757575",
  lightPrimary: "#E8CBF9",
  activePrimary: "#E5BAFF",
  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentBlack: "rgba(0, 0, 0, 0.8)",
  transparentBlack1: "rgba(0, 0, 0, 0.4)",
  transparentGray: "rgba(33, 33, 37,0.3)",
};

export const SIZES = {
  padding: height * 0.025,
  radius: height * 0.03,
  base: height * 0.01,

  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
