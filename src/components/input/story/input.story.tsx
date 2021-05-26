import { Meta, Story } from '@storybook/react/types-6-0'
import Input from '../input'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: Story<any> = (args) => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = {}
