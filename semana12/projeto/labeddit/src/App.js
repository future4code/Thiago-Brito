import React from 'react';
import theme from "./Constants/theme"
import {ThemeProvider} from '@material-ui/core/styles'
import Router from "./Routes/Router"

export default function App() {
  return (
    <ThemeProvider theme ={theme}>
    <div>
      <Router/>
    </div>
    </ThemeProvider>
  );
}


