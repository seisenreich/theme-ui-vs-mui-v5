import type { Theme } from "theme-ui";
import { ThemeProvider as ThemeUIThemeProvider } from "theme-ui";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider
} from "@mui/material/styles";
import { Grid } from "@mui/material";
import { HelloWorld } from "./HelloWorld";

const themeUITheme: Theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e"
  }
};
const muiTheme = createTheme();

export default function App() {
  return (
    <MUIThemeProvider theme={muiTheme}>
      <Grid><HelloWorld/></Grid> 
    </MUIThemeProvider>
  );
}
