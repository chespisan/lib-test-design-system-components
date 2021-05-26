import { Meta, Story } from "@storybook/react/types-6-0";
import { defaultTheme } from "../custom-theme/default-theme/defaultTheme";
import ComponentExample from "./componentExample";

export default {
  title: "Layout/Colors",
  component: ComponentExample,
  argTypes: {
    primary: { control: { type: "color" } },
    secondary: { control: { type: "color" } },
    tertiary: { control: { type: "color" } },
    success: { control: { type: "color" } },
    warning: { control: { type: "color" } },
    danger: { control: { type: "color" } },
    light: { control: { type: "color" } },
    disabled: { control: { type: "color" } },
  },
} as Meta;

const Template: Story<any> = (args) => <ComponentExample {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  primary: defaultTheme.generalColors.primary,
  secondary: defaultTheme.generalColors.secondary,
  tertiary: defaultTheme.generalColors.tertiary,
  success: defaultTheme.generalColors.success,
  warning: defaultTheme.generalColors.warning,
  danger: defaultTheme.generalColors.danger,
  light: defaultTheme.generalColors.light,
  disabled: defaultTheme.generalColors.disabled,
};
