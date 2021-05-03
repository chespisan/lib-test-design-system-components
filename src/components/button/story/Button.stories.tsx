import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import DownloadIcon from "../../../icons/Download";
import Button from "..";
import { ButtonProps } from "../types/button.type";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Basic Button",
  type: "basic",
  round: true,
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary one Button",
  type: "primary",
  round: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary one Button",
  type: "secondary",
  round: true,
};

export const Accent = Template.bind({});
Accent.args = {
  children: "Accent Button",
  type: "accent",
  round: true,
};

export const Warn = Template.bind({});
Warn.args = {
  children: "Warn Button",
  type: "warn",
  round: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  type: "disabled",
  disabled: true,
  round: true,
};

// export const Loading = Template.bind({});
// Loading.args = {
//   children: "Button",
//   loading: true,
//   round: true,
// };

// export const WithIcon = Template.bind({});
// WithIcon.args = {
//   icon: DownloadIcon,
//   children: "Download",
//   round: true,
// };

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <h2>---- Round ----</h2>
      <ButtonRow>
        <Button round type="primary" size="large">
          Large
        </Button>
        <Button round type="primary" size="large-md">
          Large-md
        </Button>
        <Button round type="primary" size="large-sm">
          Large-sm
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button round type="secondary" size="medium-xl">
          medium-xl
        </Button>
        <Button round type="secondary" size="medium">
          medium
        </Button>
        <Button round type="secondary" size="medium-sm">
          medium-sm
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button round type="disabled" size="small-xl">
          small-xl
        </Button>
        <Button round type="disabled" size="small-md">
          small-md
        </Button>
        <Button round type="disabled" size="small">
          small
        </Button>
      </ButtonRow>

      <h2>---- Not Round ----</h2>

      <ButtonRow>
        <Button size="large">Large</Button>
        <Button size="large-md">Large-md</Button>
        <Button size="large-sm">Large-sm</Button>
      </ButtonRow>

      <ButtonRow>
        <Button type="accent" size="medium-xl">
          medium-xl
        </Button>
        <Button type="accent" size="medium">
          medium
        </Button>
        <Button type="accent" size="medium-sm">
          medium-sm
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button type="warn" size="small-xl">
          small-xl
        </Button>
        <Button type="warn" size="small-md">
          small-md
        </Button>
        <Button type="warn" size="small">
          small
        </Button>
      </ButtonRow>
    </>
  );
};
