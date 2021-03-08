import React from 'react'
import { ThemeProvider } from 'styled-components'
/**
 * Crear un theme base
 * si no viene theme por props, ese theme sera el default
 * si viene theme en props, pasarselo al component
 */


export const defaultTheme = {
  primary: {
    regular: "#f8f8f8",
    hover: "#d6d6d6",
  },
  secondary: {
    regular: "#f8f8f8",
    hover: "#d6d6d6",
  },
  success: {
    regular: "#f8f8f8",
    hover: "#d6d6d6",
  },
  danger: {
    regular: "#f8f8f8",
    hover: "#d6d6d6",
  },
};

const customTheme = ({theme = defaultTheme, children}: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default customTheme
