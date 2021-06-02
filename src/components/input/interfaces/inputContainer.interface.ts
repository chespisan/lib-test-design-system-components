import { InputMode } from '../types/inputMode.type'

export interface InputContainerInterface {
  isError: boolean
  isSuccess: boolean
  mode?: InputMode
  mg?: string | string[]
  width?: string
}
