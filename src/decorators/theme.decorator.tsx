import React from "react";
import { ThemeProvider } from "styled-components";
import { ButtonType } from "../components/button/types/button.type";
import { StateColorsType } from "../components/button/types/buttonStateColor.type";

// const theme = {
//   colors: {
//     primary: '#FFD000',
//     secondary: '#1A1446',
//     success: 'green',
//     danger: '#f44336',
//   }
// };

export const theme: { [key in ButtonType]: StateColorsType } = {
  primary: {
    regular: "#FFD000",
    hover: "#d3ae09",
  },
  secondary: {
    regular: "#1A1446",
    hover: "#100d29",
  },
  success: {
    regular: "#008000",
    hover: "#035f03",
  },
  danger: {
    regular: "#f44336",
    hover: "#9b2d25",
  },
};

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme ? theme : null}>
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;