import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  Box,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import {
  setSessionCookie,
  getSessionCookie,
  request,
  useRoutes
} from 'modules/utils'
import { SnackbarContext } from 'modules/ui/common/Snackbar'

import { primaryColor } from 'modules/ui/colors'

const useStyles = makeStyles(theme => ({
  container: {
    ...theme.custom.authLayoutContainer,
  },
  loginBox: {
    width: '350px',
    maxWidth: '350px',
    padding: theme.spacing(3),
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: '10px'
  },
  button: {
    width: '100%',
    marginLeft: '5px',
    marginRight: '5px'
  }
}))

function LoginScreen() {
  const { container, loginBox, button } = useStyles()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { history } = useRoutes()
  // eslint-disable-next-line
  const { openSnackbar } = useContext(SnackbarContext)

  if (getSessionCookie().user !== undefined) {
    history.push('/clocks')
  }

  const handleSubmit = () => {
    request('GET', '/28da0434-8b6e-4acd-b533-c89709d233d1', { user, password })
      .then(res => {
        openSnackbar(
          'Login is successful',
          res.data.error ? 'error' : 'success'
        )
        if (res.data.username) {
          setSessionCookie({ user })
          history.push({ pathname: '/clocks' })
        }
      })
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={container} style={{ backgroundColor: primaryColor }}>
      <Box className={loginBox}>
        <Box mt={2} mb={2}>
          <Typography variant="h5">Login</Typography>
        </Box>
        <TextField
          label="Username"
          variant="outlined"
          value={user}
          onChange={e => setUser(e.target.value)}
          validators={['required']}
          errorMessages={['This field cannot be empty']}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
          validators={['required']}
          errorMessages={['This field cannot be empty']}
          fullWidth
        />
        <Box mt={2} mb={2}>
          <Typography variant="subtitle1">Login to ...</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={button}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default LoginScreen
