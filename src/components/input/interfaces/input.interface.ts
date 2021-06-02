import { InputMode } from '../types/inputMode.type'

export interface BaseInputInterface {
  label?: string
  name?: string
  value?: string
  placeholder?: string
  autoFocus?: boolean
  autoComplete?: string
  required?: boolean
  isError?: boolean
  min?: number
  max?: number
  mode?: InputMode
  mg?: number | number[]
  width?: string
}
