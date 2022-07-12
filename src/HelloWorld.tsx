
import { Grid } from "@mui/material";

import styled from "@emotion/styled"
import theme from "./theme";

const StyleDiv= styled.div`
font-size: ${theme.fontSize.px24};
color: ${theme.colorPalette.lightGrey.default};
`

export const  HelloWorld = () =>{
  return (
        <StyleDiv>
          <Grid>Hello world!</Grid>
        </StyleDiv>
  );
}
