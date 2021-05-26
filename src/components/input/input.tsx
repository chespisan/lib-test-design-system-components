import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styles/input.styled'

const Input = () => {
  const [valueInput, setValueInput] = useState<string>('')
  const [hasFocusDiv, setHasFocusDiv] = useState<boolean>(false)
  const [isErrorInput, setIsErrorInput] = useState<boolean>(false)
  const [isSuccessInput, setIsSuccessInput] = useState<boolean>(false)

  useEffect(() => {}, [hasFocusDiv])

  const changeValueInput = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value
    setValueInput(value)
    verifyErrorInput(value)
    verifySuccessInput()
  }

  const focusDiv = (): void => {
    setHasFocusDiv(true)
  }

  const blurDiv = (): void => {
    if (!valueInput) {
      setHasFocusDiv(false)
    }
  }

  const verifySuccessInput = (): void => {
    if (!isErrorInput) {
      setIsSuccessInput(true)
    }
  }

  const verifyErrorInput = (value: string): void => {
    value.length < 8 ? setIsErrorInput(true) : setIsErrorInput(false)
  }

  return (
    <StyledInputContainer
      onFocus={focusDiv}
      onBlur={blurDiv}
      style={{
        borderColor: isErrorInput
          ? '#EB3553'
          : isSuccessInput
          ? '#28A3AF'
          : undefined,
      }}
    >
      <StyledLabel
        style={{
          color: isErrorInput ? '#EB3553' : undefined,
          top: hasFocusDiv ? 0 : undefined,
        }}
      >
        Ingrese su nombre
      </StyledLabel>
      <StyledInput
        name="input"
        value={valueInput}
        placeholder=""
        type="text"
        onChange={changeValueInput}
        autoFocus={hasFocusDiv}
        autoComplete={'off'}
        required
        style={{ color: isErrorInput ? '#EB3553' : undefined }}
      ></StyledInput>
    </StyledInputContainer>
  )
}

export default Input
