import { DefaultTheme } from "styled-components";

// toggle의 1은 동그라미 부분, 2는 막대부분 색깔입니다.

const colors = {
  background: "#f0ebf8",
  white: "#ffffff",
  black: "#000000",
  purple: "#673ab7",
  gray: "#323D45",
  border: "#E5E5E5",
  toggleOn1: "#673ab7",
  toggleOn2: "#BBDEFB",
  toggleOff1: "#F5F5F5",
  toggleOff2: "#C2C2C2",
};

export type ColorsTypes = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
