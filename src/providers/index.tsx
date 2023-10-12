import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { OwnProps } from "./types";

const StylesProvider: React.FC<OwnProps> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StylesProvider;
