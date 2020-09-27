import * as React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Edit as EditIcon } from '@material-ui/icons'

function EditButton({ text, setChosen, editClock, zoneOptions }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [timezone, setTimezone] = React.useState('')
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  React.useEffect(() => {
    setTimezone(text)
  }, [text])

  const submitClock = () => {
    editClock(timezone)
    setTimezone('')
    setAnchorEl(null)
  }

  const onClickEdit = (event) => {
    setAnchorEl(event.currentTarget)
    setChosen(text)
  }

  return (
    <>
      <IconButton aria-label="edit" onClick={(event) => onClickEdit(event)}>
        <EditIcon color="primary" fontSize="small" />
      </IconButton>
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
          <Typography variant="subtitle1">Edit this clock.</Typography>
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
            Save
          </Button>
        </Box>
      </Popover>
    </>
  )
}

export default EditButton
