import { createGlobalStyle } from "styled-components";
import { background } from "./landscapecalc.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-image: url("${background}");
  background-size: cover;
  background-repeat: no-repeat;
}
`;
