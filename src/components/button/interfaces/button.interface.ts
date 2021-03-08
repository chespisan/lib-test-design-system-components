import { ElementType, ReactNode } from 'react';
import { ComponentSize } from '../../../config/sizes';
import { ButtonType } from "../types/button.type";

export interface BaseButtonInterface {
  type?: ButtonType;
  icon?: ElementType;
  size?: ComponentSize;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}