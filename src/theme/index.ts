import { DefaultTheme } from "styled-components";

declare module "styled-components/" {
  export interface DefaultTheme {
    colors: {
      shadow: string;
      ice: string;
      black: string;
      gray: string;
      grayTransparent: string;
      white: string;
      pink: string;
      lavander: string;
      babyBlue: string;
      purple: string;
      purpleDark: string;
    };
    font: {
      sm: string;
      md: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      circle: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    shadow: "#00000026",
    ice: "#edeceb",
    black: "#333333",
    gray: "#666666",
    grayTransparent: "#666666cc",
    white: "#ffffff",
    pink: "#ffe5ea",
    lavander: "#e8f8ff",
    babyBlue: " #f1f7fc",
    purple: "#aa8df7",
    purpleDark: "#b289f3",
  },
  font: {
    sm: "12px",
    md: "16px",
  },
  radius: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    circle: "50%",
  },
};

export default theme;
