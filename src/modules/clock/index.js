import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography
} from '@material-ui/core'
import timezone from 'moment-timezone'
import {
  getSessionCookie,
  getZoneCookie,
  setZoneCookie,
  logout,
  useRoutes
} from 'modules/utils'
import { SnackbarContext } from 'modules/ui/common/Snackbar'
import Clock from 'modules/ui/common/Clock'
import FloatingButton from 'modules/ui/common/FloatingButton'
import AlertConfirm from 'modules/ui/common/AlertConfirm'
import { initialZones } from './constant'

const useStyles = makeStyles(theme => ({
  loginBox: {
    padding: theme.spacing(3),
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: '10px'
  }
}))

function ClockScreen() {
  const { loginBox } = useStyles()
  const [now, setNow] = useState(Date.now() / 1000)
  const [zones, setZones] = useState([])
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [int, setInt] = useState(false)
  const [chosen, setChosen] = useState('')
  const { history } = useRoutes()
  // eslint-disable-next-line
  const { openSnackbar } = useContext(SnackbarContext)

  // existed timezone cannot be selected
  const clearExistZone = (option) => {
    let isNotSelected = true
    if (
      option === 'UTC'
      || option === timezone.tz.guess(true)
      || option === 'Etc/UTC'
      || zones.indexOf(option) > -1
    ) isNotSelected = false
    return isNotSelected
  }
  const zoneOptions = timezone.tz.names().filter(clearExistZone)

  if (getSessionCookie().user === undefined) {
    history.push('/')
  }

  useEffect(() => {
    setTimeout(() => {
      setNow(now + 1)
    }, 1000)
  }, [now])

  useEffect(() => {
    if (getZoneCookie().length < 1) {
      setZoneCookie(initialZones)
      setZones(initialZones)
    } else {
      setZones(getZoneCookie())
    }
  }, [])

  const openAlert = (z) => {
    setIsAlertOpen(true)
    setChosen(z)
  }

  const addClock = (newClock) => {
    if (newClock) {
      zones.push(newClock)
      setZoneCookie(zones)
      setZones(zones)
      openSnackbar('New zone added', 'success')
    } else openSnackbar('No zone selected', 'error')
  }

  const editClock = (newClock) => {
    if (newClock) {
      const chosenIndex = zones.indexOf(chosen)
      zones.splice(chosenIndex, 1, newClock)
      setZoneCookie(zones)
      setChosen('')
      setZones(zones)
      openSnackbar('Zone edited', 'success')
    } else {
      setChosen('')
      openSnackbar('No zone selected', 'error')
    }
  }

  const deleteClock = () => {
    const chosenIndex = zones.indexOf(chosen)
    zones.splice(chosenIndex, 1)
    setZoneCookie(zones)
    setZones(zones)
    setChosen('')
    setIsAlertOpen(false)
    openSnackbar('Zone deleted', 'success')
  }

  const onLogout = () => {
    logout()
    history.push('/')
    openSnackbar('Logout', 'success')
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box className={loginBox}>
        <Box top="40px" position="absolute">
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={() => onLogout()}
          >
            Logout
          </Button>
        </Box>
        <Box mt={2} mb={2} ml="calc(30% - 200px)" display="flex" justifyContent="center">
          <Box mr={2}>
            <Typography variant="h2">World Clock</Typography>
            <Typography variant="h4">{`Welcome, ${getSessionCookie().user}`}</Typography>
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={int}
                onChange={() => setInt(!int)}
                name="international"
                color="primary"
              />
            }
            label="International Time Format"
          />
        </Box>
        <Box p={3} display="flex" justifyContent="center" flexWrap="wrap">
          <Clock now={now} int={int} text={timezone.tz.guess(true)} />
          <Clock now={now} int={int} />
        </Box>
        <Box p={3} border="#BABABA 1px solid" borderRadius="10px" display="flex" justifyContent="center" maxWidth="1500px" flexWrap="wrap">
          {zones.map((z) => (
            <Clock
              key={z}
              now={now}
              int={int}
              text={z}
              setChosen={setChosen}
              openAlert={openAlert}
              editClock={editClock}
              zoneOptions={zoneOptions}
            />
          ))}
        </Box>
      </Box>
      <FloatingButton addClock={addClock} zoneOptions={zoneOptions} />
      <AlertConfirm
        open={isAlertOpen}
        title={`Delete ${chosen}`}
        text={`Do you want to delete ${chosen}?`}
        confirmClick={deleteClock}
        handleModalOpen={setIsAlertOpen}
      />
    </Grid>
  )
}

export default ClockScreen
