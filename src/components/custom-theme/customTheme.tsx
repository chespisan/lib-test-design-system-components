import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./default-theme/defaultTheme";
import { customThemeInterface } from "./interfaces/customTheme.interface";

const CustomTheme = ({
  theme = defaultTheme,
  children,
}: customThemeInterface) => {
  console.log("args: ", theme, children);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
