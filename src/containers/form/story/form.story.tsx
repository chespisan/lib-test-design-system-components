import { Meta, Story } from '@storybook/react/types-6-0'
import React, {
  useState,
  ChangeEvent,
  FormEventHandler,
  useEffect,
} from 'react'
import { BaseInputInterface } from '../../../components/input/interfaces/input.interface'
import { InputProps } from '../../../components/input/types/inputProps.type'
import Form from '../form'
import { FormInterface } from '../interfaces/form.interface'

export default {
  title: 'Containers/form',
  component: Form,
} as Meta

let inputs: BaseInputInterface[] | InputProps[] = [
  {
    name: 'name',
    mode: 'basic',
    max: 20,
    min: 5,
    autoComplete: 'off',
    label: 'Ingresar nombre',
    type: 'text',
    mg: 10,
    width: '80%',
    value: 'Sergio',
  },
  {
    name: 'email',
    mode: 'basic',
    max: 20,
    min: 5,
    autoComplete: 'off',
    label: 'Ingresar email',
    type: 'text',
    mg: 10,
    width: '80%',
    value: 'sergio@mail.com',
  },
  {
    name: 'password',
    mode: 'basic',
    max: 20,
    min: 5,
    autoComplete: 'off',
    label: 'Ingresar password',
    type: 'password',
    mg: 10,
    width: '80%',
    value: 'valueName',
  },
]

const Template: Story<FormInterface> = (args) => <Form {...args} />

export const FormBasic = Template.bind({})
FormBasic.args = {
  inputs: inputs,
  onChange: () => {
    return
  },
  onSubmit: (e: ChangeEvent<FormEventHandler>) => {
    e.preventDefault()
  },
  disabledButton: false,
}

export const ExampleForm = () => {
  const [valueName, setValueName] = useState<string>('')
  const [valueEmail, setValueEmail] = useState<string>('')
  const [valuePassword, setValuePassword] = useState<string>('')
  const [disabledButton, setDisabledButton] = useState<boolean>(true)

  let inputs: BaseInputInterface[] | InputProps[] = [
    {
      name: 'name',
      mode: 'basic',
      max: 20,
      min: 5,
      autoComplete: 'off',
      label: 'Ingresar nombre',
      type: 'text',
      mg: 10,
      width: '80%',
      value: valueName,
    },
    {
      name: 'email',
      mode: 'basic',
      max: 20,
      min: 5,
      autoComplete: 'off',
      label: 'Ingresar email',
      type: 'text',
      mg: 10,
      width: '80%',
      value: valueEmail,
    },
    {
      name: 'password',
      mode: 'basic',
      max: 20,
      min: 5,
      autoComplete: 'off',
      label: 'Ingresar password',
      type: 'password',
      mg: 10,
      width: '80%',
      value: valuePassword,
    },
  ]

  useEffect(() => {
    if (
      valueName.length > 5 &&
      valueEmail.length > 5 &&
      valuePassword.length > 5
    ) {
      setDisabledButton(false)
      return
    }
    setDisabledButton(true)
  }, [valuePassword, valueName, valueEmail])

  const changeValueInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setValueInput(name, value)
  }

  const onSubmit = (e: ChangeEvent<FormEventHandler>) => {
    e.preventDefault()
    console.log('onSubmit!!', valueName, valueEmail, valuePassword)
  }

  const setValueInput = (name: string, value: string): void => {
    switch (name) {
      case 'name':
        setValueName(value)
        break
      case 'email':
        setValueEmail(value)
        break
      case 'password':
        setValuePassword(value)
        break
      default:
        break
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      inputs={inputs}
      onChange={changeValueInput}
      disabledButton={disabledButton}
    ></Form>
  )
}
