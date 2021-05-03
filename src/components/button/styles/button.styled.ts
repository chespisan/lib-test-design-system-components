import styled from "styled-components";
import { StyledButtonProps } from "../interfaces/buttonStyled.interface";
import { heights, sidePaddings, Widths } from "../../../config/sizes/sizes";

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(pr) =>
    pr.theme.components.button.types[pr.innerType].regular};

  border: ${(pr) =>
    pr.innerType !== "disabled" && pr.innerType !== "primary"
      ? `1px solid ${pr.theme.components.button.types[pr.innerType].contrast}`
      : "none"};

  border-radius: ${(pr: any) =>
    pr.round ? pr.theme.components.button.properties.borderRadius : "5px"};

  color: ${(pr) => pr.theme.components.button.types[pr.innerType].tint};

  cursor: pointer;

  font-size: ${(pr) =>
    pr.theme.components.button.properties.fontSize
      ? `${pr.theme.components.button.properties.fontSize}`
      : "15px"};

  height: ${(pr) => heights[pr.size]}px;

  padding: 0 ${(pr) => sidePaddings[pr.size]}px;

  outline: none;

  width: ${(pr) => Widths[pr.size]}px;
`;
