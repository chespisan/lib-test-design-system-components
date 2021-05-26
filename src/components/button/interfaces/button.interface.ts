import { ElementType, ReactNode } from "react";
import { ComponentSize } from "../../../config/sizes/types/componentSize.type";
import { ButtonColor } from "../types/ButtonColor.type";
import { ButtonMode } from "../types/buttonMode.type";
import { ButtonType } from "../types/buttonType.type";

export interface BaseButtonInterface {
  className?: string;
  color?: ButtonColor;
  children?: ReactNode;
  disabled?: boolean;
  icon?: ElementType;
  loading?: boolean;
  mode?: ButtonMode;
  round?: boolean;
  size?: ComponentSize;
  type?: ButtonType;
}
