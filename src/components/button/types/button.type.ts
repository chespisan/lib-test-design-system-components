import { ElementType, MouseEventHandler } from 'react';
import { BaseButtonInterface } from './../interfaces/button.interface';


type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonInterface;

type HTMLAnchorProps = {
  href?: string;
} & BaseButtonInterface;

type CustomNodeProps = {
  as?: ElementType;
  to?: string;
} & BaseButtonInterface;

export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' ;
export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;