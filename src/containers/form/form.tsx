import React, { useEffect } from 'react'
import { Button } from '../../components'
import Input from '../../components/input/input/input'
import { BaseInputInterface } from '../../components/input/interfaces/input.interface'
import { InputProps } from '../../components/input/types/inputProps.type'
import { FormInterface } from './interfaces/form.interface'
import { StyledFormContainer } from './styles/form.styled'

const Form: React.FC<FormInterface> = ({
  inputs,
  onChange,
  onSubmit,
  disabledButton,
}) => {
  return (
    <StyledFormContainer onSubmit={onSubmit}>
      {inputs.map((el: any, index: number) => (
        <Input
          name={el.name}
          key={index}
          label={el.label}
          type={el.type}
          mg={el.mg}
          width={el.width}
          value={el.value}
          onChange={onChange}
          autoComplete="off"
          max={el.max}
          min={el.min}
          mode={el.mode}
        ></Input>
      ))}
      <Button type="submit" disabled={disabledButton} round>
        Ingresar
      </Button>
    </StyledFormContainer>
  )
}

export default Form
