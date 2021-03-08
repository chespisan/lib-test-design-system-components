import { ComponentSize } from "../../../config/sizes";
import { ButtonType } from "../types/button.type";

export interface StyledButtonProps {
  innerType: ButtonType;
  size: ComponentSize;
  withText: boolean;
}