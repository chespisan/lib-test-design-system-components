import styled from 'styled-components'
import { BaseInputInterface } from '../interfaces/input.interface'
import { InputContainerInterface } from '../interfaces/inputContainer.interface'
import { inputLabelInterface } from '../interfaces/inputLabel.interface'

export const StyledInput = styled.input<BaseInputInterface>`
  background-color: ${({ theme: { generalColors } }) => generalColors.ligth};
  border: none;
  color: ${({ theme: { generalColors }, isError }) =>
    isError ? generalColors.danger : undefined};
  outline: none;
  font-size: 16px;
`
export const StyledInputContainer = styled.div<InputContainerInterface>`
  ${({ mode }) =>
    mode === 'round'
      ? `border: solid thin #979797;
         border-radius: 20px;     
        `
      : `
        none;
        border-bottom: solid thin  #979797;
        `}

  ${({ mg }) => `margin: ${mg};`}
  
  border-color: ${({ theme: { generalColors }, isSuccess, isError }) =>
    isError
      ? generalColors.danger
      : isSuccess
      ? generalColors.tertiary
      : undefined};
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  padding: 8px;
  position: relative;
  width: ${({ width }) => `${width}`}
`

export const StyledLabel = styled.label<inputLabelInterface>`
  color: ${({ theme: { generalColors }, isError }) =>
    isError ? generalColors.danger : 'black'};
  font-size: 14px;
  margin-left: 3px;
  position: relative;
  top: ${({ hasFocus }) => (hasFocus ? 0 : '8px')};
  transition: all 0.2s ease-out;
`
