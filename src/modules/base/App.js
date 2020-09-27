import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'modules/ui/theme'
import LoginScreen from 'modules/login'
import ClockScreen from 'modules/clock'
import { CustomSnackbar, SnackbarContextProvider } from 'modules/ui/common/Snackbar'
import './App.css'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarContextProvider>
        <div className="container">
          <BrowserRouter>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/clocks" component={ClockScreen} />
          </BrowserRouter>
        </div>
        <CustomSnackbar />
      </SnackbarContextProvider>
    </MuiThemeProvider>
  );
}

export default App;
