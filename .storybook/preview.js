import { configure, addDecorator } from "@storybook/react"
import themeDecorator from '../src/decorators/theme.decorator.tsx'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// addDecorator(themeDecorator);
