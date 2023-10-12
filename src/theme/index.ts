import { DefaultTheme } from "styled-components";

declare module "styled-components/" {
  export interface DefaultTheme {
    colors: {
      black: string;
      gray: string;
      white: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    black: "#333",
    gray: "#666",
    white: "#fff",
  },
};

export default theme;
