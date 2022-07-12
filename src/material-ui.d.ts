import {
    Colors,
    MediaQuery,
    ScreenBreakpoint,
    SpaceAlias,
    Variants,
  } from "./theme.types"
  import {
    CommonBreakpoints,
    FontWeight,
    FontSize,
    LineHeight,
  } from "../utils/theme"
  
  declare module "@mui/material/styles" {
    interface Theme {
      commonBreakpoints: CommonBreakpoints
      fontWeight: FontWeight
      fontSize: FontSize
      lineHeight: LineHeight
      colorPalette: Colors
    }
  }
  