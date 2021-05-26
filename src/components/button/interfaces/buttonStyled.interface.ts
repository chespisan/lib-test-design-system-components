import { ComponentSize } from '../../../config/sizes/types/componentSize.type'
import { ButtonColor } from '../types/ButtonColor.type'
import { ButtonMode } from '../types/buttonMode.type'

export interface StyledButtonProps {
  innerType: ButtonColor
  size: ComponentSize
  disabled: boolean
  withText: boolean
  mode: ButtonMode
}
