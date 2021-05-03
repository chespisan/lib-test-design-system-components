import { ElementType, ReactNode } from "react";
import { ComponentSize } from "../../../config/sizes/types/componentSize.type";
import { ButtonType } from "../types/button.type";

export interface BaseButtonInterface {
  type?: ButtonType;
  icon?: ElementType;
  size?: ComponentSize;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  round?: boolean;
  loading?: boolean;
}
