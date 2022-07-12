import {
  Colors,
  Variants,
} from "./theme.types"

const colorPalette: Colors = {
  red: {
    default: "#e2001a",
    hover: "#ff001d",
  },
  grey: {
    default: "#f0f0f0",
    hover: "#f6f6f6",
  },
  midGrey: {
    default: "#dedede",
    hover: "#efefef",
  },
  lightGrey: {
    default: "#8e8e8e",
    hover: "#9f9f9f",
  },
  darkGrey: {
    default: "#282828",
    hover: "#393939",
  },
  green: {
    default: "#28A858",
    hover: "#3ebe6e",
  },
  blue: {
    default: "#4a90e2",
    hover: "#5ba1f3",
  },
  seagreen: {
    default: "#1f9e93",
    hover: "#2fafa4",
  },
  yellow: {
    default: "#f9d026",
    hover: "#faf147",
  },
  orange: {
    default: "#f5a623",
    hover: "#f6b734",
  },
  white: {
    default: "#ffffff",
    hover: "#efefef",
  },
  anthracite: {
    default: "#282828",
    hover: "#1d1d1d",
  },
  black: {
    default: "#000000",
    hover: "#1d1d1d",
  },
  purple: {
    default: "#753CA7",
    hover: "#61328a",
  },
}

const variants: Variants = {
  primary: {
    default: colorPalette.red.default,
    hover: colorPalette.red.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.red.default,
    outlineTextHover: colorPalette.red.hover,
  },
  secondary: {
    default: colorPalette.midGrey.default,
    hover: colorPalette.midGrey.hover,
    text: colorPalette.darkGrey.default,
    textHover: colorPalette.darkGrey.hover,
    outlineText: colorPalette.darkGrey.default,
    outlineTextHover: colorPalette.darkGrey.hover,
  },
  success: {
    default: colorPalette.green.default,
    hover: colorPalette.green.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.green.default,
    outlineTextHover: colorPalette.green.hover,
  },
  danger: {
    default: colorPalette.red.default,
    hover: colorPalette.red.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.red.default,
    outlineTextHover: colorPalette.red.hover,
  },
  warning: {
    default: colorPalette.orange.default,
    hover: colorPalette.orange.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.orange.default,
    outlineTextHover: colorPalette.orange.hover,
  },
  info: {
    default: colorPalette.blue.default,
    hover: colorPalette.blue.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.blue.default,
    outlineTextHover: colorPalette.blue.hover,
  },
  anthracite: {
    default: colorPalette.anthracite.default,
    hover: colorPalette.anthracite.hover,
    text: colorPalette.white.default,
    textHover: colorPalette.white.default,
    outlineText: colorPalette.anthracite.default,
    outlineTextHover: colorPalette.anthracite.hover,
  },
}

export interface FontSize {
  px14: string;
  px16: string;
  px18: string;
  px20: string;
  px24: string;
  px26: string;
  px38: string;
}
const fontSize: FontSize = {
  px14: "14px",
  px16: "16px",
  px18: "18px",
  px20: "20px",
  px24: "24px",
  px26: "26px",
  px38: "38px",
}

export interface FontWeight {
  light: number;
  regular: number;
  bold: string;
}
const fontWeight: FontWeight = {
  light: 300,
  regular: 400,
  bold: "bold",
}

export interface LineHeight {
  px23: string;
  px25: string;
  px26: string;
  px29: string;
  px33: string;
  px36: string;
  px50: string;
}
const lineHeight: LineHeight = {
  px23: "23px",
  px25: "25px",
  px26: "26px",
  px29: "29px",
  px33: "33px",
  px36: "36px",
  px50: "50px",
}

const theme = {
  fontSize,
  fontWeight,
  lineHeight,
  colorPalette
}
export default theme
