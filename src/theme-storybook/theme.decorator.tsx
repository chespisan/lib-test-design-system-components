import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../components/custom-theme/default-theme/defaultTheme";

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
