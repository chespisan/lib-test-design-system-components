import React, { useEffect, useState } from 'react'
import { BaseInputInterface } from '../interfaces/input.interface'
import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from '../styles/input.styled'
import { InputProps } from '../types/inputProps.type'

const Input = (props: BaseInputInterface | InputProps) => {
  const [hasFocusDiv, setHasFocusDiv] = useState<boolean>(false)
  const [isErrorInput, setIsErrorInput] = useState<boolean>(false)
  const [isSuccessInput, setIsSuccessInput] = useState<boolean>(false)
  const [formatMG, setFormatMG] = useState<string>('')
  const { label, max, min, value, isError, mode, mg, width } = props

  useEffect(() => {
    if (value && value.length > 0) {
      setHasFocusDiv(true)
    }
    if (max && min)
      if (value!.length > min && value!.length < max) {
        setIsErrorInput(false)
        setIsSuccessInput(true)
        return
      }
    setIsErrorInput(true)
    setIsSuccessInput(false)
  }, [value])

  useEffect(() => {
    isError ? setIsErrorInput(true) : setIsErrorInput(false)
  }, [isError])

  useEffect(() => {
    isError ? setIsErrorInput(true) : setIsErrorInput(false)
    createNewMargin()
  }, [])

  useEffect(() => {}, [hasFocusDiv])

  const focusDiv = (): void => setHasFocusDiv(true)

  const blurDiv = (): void => {
    if (!value) setHasFocusDiv(false)
  }

  const createNewMargin = (): void => {
    if (Array.isArray(mg)) {
      let newMargin = mg.map((m) => `${m}px`).join(' ')
      setFormatMG(newMargin)
      return
    }
    mg && setFormatMG(`${mg}px`)
  }

  return (
    <StyledInputContainer
      mode={mode}
      isError={isErrorInput}
      isSuccess={isSuccessInput}
      onFocus={focusDiv}
      onBlur={blurDiv}
      mg={formatMG}
      width={width}
    >
      <StyledLabel isError={isErrorInput} hasFocus={hasFocusDiv}>
        {label}
      </StyledLabel>
      <StyledInput isError={isErrorInput} {...props}></StyledInput>
    </StyledInputContainer>
  )
}

export default Input
