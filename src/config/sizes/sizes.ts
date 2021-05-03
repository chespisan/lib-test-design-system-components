import { ComponentSize } from "./types/componentSize.type";

export const sidePaddings: { [key in ComponentSize]: number } = {
  small: 20,
  "small-md": 25,
  "small-xl": 30,

  medium: 25,
  "medium-sm": 20,
  "medium-xl": 30,

  large: 30,
  "large-sm": 20,
  "large-md": 25,
};

export const heights: { [key in ComponentSize]: number } = {
  small: 31,
  "small-md": 45,
  "small-xl": 53,

  medium: 45,
  "medium-sm": 31,
  "medium-xl": 53,

  large: 53,
  "large-sm": 31,
  "large-md": 45,
};

export const Widths: { [key in ComponentSize]: number } = {
  small: 118,
  "small-md": 118,
  "small-xl": 118,

  medium: 158,
  "medium-sm": 158,
  "medium-xl": 158,

  large: 309,
  "large-sm": 309,
  "large-md": 309,
};
