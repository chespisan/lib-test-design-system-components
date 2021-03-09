import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../themes/defaultTheme'


const customTheme = ({theme = defaultTheme, children}: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default customTheme
