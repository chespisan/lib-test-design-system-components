import { Meta, Story } from '@storybook/react/types-6-0'
import { ChangeEvent, useState } from 'react'
import Input from '../input/input'
import { InputProps } from '../types/inputProps.type'

export default {
  title: 'Components/Inputs/Input basic',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const InputBasic = Template.bind({})
InputBasic.args = {
  type: 'text',
  name: 'name',
  value: '',
  max: 20,
  min: 3,
  mode: 'basic',
  autoComplete: 'off',
  autoFocus: false,
  required: false,
  isError: false,
  onChange: () => {},
}

export const InputSuccess = Template.bind({})
InputSuccess.args = {
  type: 'text',
  value: 'Sergio Sanchez',
  max: 20,
  min: 3,
  mode: 'basic',
  onChange: () => {},
}

export const InputError = Template.bind({})
InputError.args = {
  type: 'text',
  isError: true,
  mode: 'basic',
  onChange: () => {},
}

export const ExampleInput = () => {
  const [valueInput, setValueInput] = useState<string>('')

  const changeValueInput = (event: ChangeEvent<HTMLInputElement>): void => {
    let value = event.target.value
    setValueInput(value)
  }

  return (
    <Input
      name="email"
      type="text"
      mode="basic"
      placeholder=""
      value={valueInput}
      onChange={changeValueInput}
      autoComplete="off"
      max={30}
      min={3}
    />
  )
}
