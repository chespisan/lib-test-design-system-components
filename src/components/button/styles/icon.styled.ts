import styled from "styled-components";
import { StyledIconProps } from "../interfaces/iconStyled.interface";

export const StyledIcon = styled.div<StyledIconProps>`
  fill: ${(pr) => pr.theme.components.button.types[pr.innerType]?.tint};
  height: 20px;
  position: absolute;
  right: 10px;
`;
