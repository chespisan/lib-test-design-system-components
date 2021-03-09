import styled from "styled-components";
import { StyledButtonProps } from "../interfaces/buttonStyled.interface";
import { ButtonType } from "../types/button.type";
import { StateColorsType } from "../types/buttonStateColor.type";
import { ComponentSize, heights, sidePaddings, Widths } from "../../../config/sizes";



export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(pr) => pr.theme.colors[pr.innerType]?.regular};
  border: ${(pr) => 
    pr.innerType === 'outlineOne' 
    ? `1px solid ${pr.theme.colors['outlineOne']?.contrast }` 
    : 'none'
  };
  border-radius: ${(pr: any) =>
    pr.round
      ? pr.theme.button.borderRadius
      : '5px'};
  color: ${(pr) => pr.theme.colors[pr.innerType]?.contrast};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: ${(pr) => heights[pr.size]}px;
  & > *:nth-child(1) {
    margin-left: ${(pr) => (pr.withText ? 7 : 0)}px;
  }
  padding: 0 ${(pr) => sidePaddings[pr.size]}px;
  width: ${(pr) => Widths[pr.size]}px;
  ${(pr) =>
    pr.disabled
      ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;
        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `
      : ""}
      &:focus {
     box-shadow: 0 0 0 1px #fff,
       0 0 0 2px ${(pr) => pr.theme.colors[pr.innerType].regular};
  };
  outline: none;
`;













// const typeColors: { [key in ButtonType]: StateColorsType } = {
//   primary: {
//     regular: "#0018cf",
//     hover: "#2e27cc",
//   },
//   secondary: {
//     regular: "#000",
//     hover: "#3d3d3d",
//   },
//   success: {
//     regular: "#d93848",
//     hover: "#eb4d5d",
//   },
//   danger: {
//     regular: "transparent",
//     hover: "#dbdbdb",
//   },
// };

/* Add margin in case of loading or icon */
// export const StyledButton = styled.button<StyledButtonProps>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   & > *:nth-child(1) {
//     margin-left: ${(pr) => (pr.withText ? 7 : 0)}px;
//   }
//   font-size: 15px;
//   border: none;
//   cursor: pointer;
//   background-color: ${  (pr) => pr.theme[pr.innerType]?.regular };
//   padding: 0 ${(pr) => sidePaddings[pr.size]}px;
//   height: ${(pr) => heights[pr.size]}px;
//   /* color: ${(pr) =>
//     pr.innerType === "success" ? typeColors["primary"].regular : "#fff"}; */
//   ${(pr) =>
//     pr.disabled
//       ? `
//         background-color: #a6a6a6;
//         color: #5e5e5e;
//         cursor: not-allowed;
//         &:hover {
//             background-color: #a6a6a6 !important;
//             color: #5e5e5e !important;
//         }
//     `
//       : ""}
//   border-radius: 0;
//   outline: none;
//   &:focus {
//     box-shadow: 0 0 0 1px #fff,
//       0 0 0 2px ${(pr) => typeColors[pr.innerType].regular};
//   }
//   &:hover {
//     background-color: ${(pr) => typeColors[pr.innerType].hover};
//   }
// `;
