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
    space: {
      sm: string;
      md: string;
      lg: string;
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
    pink: "#ffcad4",
    lavander: "#9dd2d8",
    babyBlue: " #f1f7fc",
    purple: "#aa8df7",
    purpleDark: "#b289f3",
  },
  font: {
    sm: "12px",
    md: "16px",
  },
  space: {
    sm: "16px",
    md: "20px",
    lg: "24px",
  },
  radius: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    circle: "50%",
  },
};

export default theme;
