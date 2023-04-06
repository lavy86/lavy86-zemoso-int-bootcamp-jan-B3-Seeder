import React from 'react'
import {theme} from '../themes/theme'
import { ThemeProvider } from '@mui/material'
import Button from '@mui/material/Button'
const App = () => {
  
  return(
    <ThemeProvider theme={theme}>
<Button variant='contained' color='primary'>Button</Button>
    </ThemeProvider>
  ) 
}

export default App
