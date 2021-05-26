import styled from 'styled-components'
import { StyledButtonProps } from '../interfaces/buttonStyled.interface'
import { heights, sidePaddings, Widths } from '../../../config/sizes/sizes'

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(pr) =>
    pr.theme.components.button.types[pr.innerType]?.regular};

  ${(pr) =>
    pr.mode === 'desktop'
      ? `
    box-shadow: ${
      (pr.color === 'basic' && pr.disabled) ||
      (pr.color === 'secondary' && pr.disabled) ||
      (pr.color === 'warn' && pr.disabled)
        ? pr.theme.components.button.types.primary?.shade
        : pr.theme.components.button.types[pr.innerType]?.shade
    };
    text-shadow: ${
      pr.color === 'basic' || pr.color === 'secondary' || pr.color === 'warn'
        ? pr.theme.components.button.types.primary?.shadeTint
        : pr.theme.components.button.types[pr.innerType]?.shadeTint
    };
    `
      : ''}

  border: ${(pr) =>
    pr.innerType !== 'primary'
      ? `1px solid ${pr.theme.components.button.types[pr.innerType]?.contrast}`
      : 'none'};

  border-radius: ${(pr: any) =>
    pr.round ? pr.theme.components.button.properties.borderRadius : '5px'};

  color: ${(pr) => pr.theme.components.button.types[pr.innerType]?.tint};

  cursor: pointer;

  ${(pr) =>
    pr.disabled
      ? `
        background-color: ${pr.theme.components.button.types.disabled?.regular};
        color: ${pr.theme.components.button.types.disabled?.tint};
        /* box-shadow: ${pr.theme.components.button.types.disabled?.shade};
        text-shadow: ${pr.theme.components.button.types.disabled?.shadeTint}; */
        cursor: not-allowed;
        border: none;
        /* &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        } */
    `
      : ''}

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: ${(pr) =>
    pr.theme.components.button.properties.fontSize
      ? `${pr.theme.components.button.properties.fontSize}`
      : '15px'};

  height: ${(pr) => heights[pr.size]}px;

  padding: 0 ${(pr) => sidePaddings[pr.size]}px;

  position: relative;

  outline: none;

  width: ${(pr) => Widths[pr.size]}px;
`
