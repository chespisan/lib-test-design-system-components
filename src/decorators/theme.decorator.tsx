import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../themes/defaultTheme";

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={defaultTheme}>
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;