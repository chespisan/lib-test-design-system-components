import { ChangeEvent, FormEventHandler } from 'react'
import { BaseInputInterface } from '../../../components/input/interfaces/input.interface'
import { InputProps } from '../../../components/input/types/inputProps.type'

export interface FormInterface {
  inputs: BaseInputInterface[] | InputProps[]
  onChange(event: ChangeEvent<HTMLInputElement>): void
  onSubmit(e: ChangeEvent<FormEventHandler>): void
  disabledButton: boolean
}
