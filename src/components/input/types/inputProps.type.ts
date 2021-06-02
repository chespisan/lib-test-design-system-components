import { ChangeEventHandler, HTMLAttributes, InputHTMLAttributes } from 'react'
import { BaseInputInterface } from '../interfaces/input.interface'
import { InputType } from './inputType.type'

type HTMLInputElementProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>
} & BaseInputInterface

type HTMLAttributesProps = {
  type?: InputType
} & BaseInputInterface

export type InputProps = HTMLInputElementProps & HTMLAttributesProps
