import { addDecorator } from "@storybook/react";
import themeDecorator from "../src/theme-storybook/theme.decorator.tsx";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(themeDecorator);
