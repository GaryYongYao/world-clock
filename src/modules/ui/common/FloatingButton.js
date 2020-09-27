import * as React from 'react'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { styled } from '@material-ui/styles'
import { Add as AddIcon } from '@material-ui/icons'

const FloatButtonStyled = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(28),
  right: theme.spacing(20),
  padding: theme.spacing(2), // give some gap between the popover panel
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))

function FloatingButton({ addClock, zoneOptions }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [timezone, setTimezone] = React.useState('')
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const submitClock = () => {
    addClock(timezone)
    setTimezone('')
    setAnchorEl(null)
  }

  return (
    <>
      <FloatButtonStyled onClick={(event) => setAnchorEl(event.currentTarget)}>
        <Fab color="primary" disableRipple>
          <AddIcon size={33} />
        </Fab>
      </FloatButtonStyled>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={5} minWidth="400px">
          <Typography variant="subtitle1">Add a clock.</Typography>
          <Autocomplete
            id="combo-box-demo"
            options={zoneOptions}
            value={timezone}
            getOptionLabel={(option) => option}
            onChange={(e, v) => setTimezone(v)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Timezone"
                variant="outlined"
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={() => submitClock()}
          >
            Add
          </Button>
        </Box>
      </Popover>
    </>
  )
}

export default FloatingButton
