import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import DownloadIcon from '../../../icons/Download'
import Button from '..'
import { ButtonProps } from '../types/buttonProps.type'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      description: '',
      table: {
        type: { summary: '' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'select',
        options: ['basic', 'primary', 'secondary', 'accent', 'warn'],
      },
    },
    mode: {
      defaultValue: { summary: '', detail: 'plop' },
      control: {
        type: 'select',
        options: ['mobile', 'desktop'],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic Button',
  color: 'basic',
  round: true,
  disabled: false,
  mode: 'mobile',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  color: 'primary',
  round: true,
  disabled: false,
  mode: 'mobile',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  color: 'secondary',
  round: true,
  disabled: false,
  mode: 'mobile',
}

export const Accent = Template.bind({})
Accent.args = {
  children: 'Accent Button',
  color: 'accent',
  round: true,
  disabled: false,
  mode: 'mobile',
}

export const Warn = Template.bind({})
Warn.args = {
  children: 'Warn Button',
  color: 'warn',
  round: true,
  disabled: false,
  mode: 'mobile',
}

// export const Disabled = Template.bind({});
// Disabled.args = {
//   children: "Disabled Button",
//   type: "disabled",
//   disabled: true,
//   round: true,
// };

// export const Loading = Template.bind({});
// Loading.args = {
//   children: "Button",
//   loading: true,
//   round: true,
// };

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: DownloadIcon,
  children: 'Download',
  color: 'primary',
  round: true,
}

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`

export const Sizes = () => {
  return (
    <>
      <h2>---- Round ----</h2>
      <ButtonRow>
        <Button round color="primary" size="large">
          Large
        </Button>
        <Button round color="primary" size="large-md">
          Large-md
        </Button>
        <Button round color="primary" size="large-sm" icon={DownloadIcon}>
          Large-sm
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button round color="secondary" size="medium-xl">
          medium-xl
        </Button>
        <Button round color="secondary" size="medium">
          medium
        </Button>
        <Button round color="secondary" size="medium-sm" icon={DownloadIcon}>
          medium-sm
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button round disabled mode="desktop" size="small-xl">
          small-xl
        </Button>
        <Button round disabled mode="desktop" size="small-md">
          small-md
        </Button>
        <Button round disabled mode="desktop" size="small" icon={DownloadIcon}>
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
        <Button color="accent" mode="desktop" size="medium-xl">
          medium-xl
        </Button>
        <Button color="accent" mode="desktop" size="medium">
          medium
        </Button>
        <Button color="accent" mode="desktop" size="medium-sm">
          medium-sm
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button color="warn" size="small-xl">
          small-xl
        </Button>
        <Button color="warn" size="small-md">
          small-md
        </Button>
        <Button color="warn" size="small">
          small
        </Button>
      </ButtonRow>
    </>
  )
}
