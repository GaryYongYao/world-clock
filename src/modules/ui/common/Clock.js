import React from 'react'
import {
  Box,
  IconButton,
  Typography
} from '@material-ui/core'
import {
  Delete as DeleteIcon
} from '@material-ui/icons'
import {
  formatTime
} from 'modules/utils'
import EditButton from './EditButton'

function Clock({ text, now, int, setChosen, openAlert, editClock, zoneOptions }) {
  return (
    <Box p={5} minWidth="400px" display="flex">
      <Box>
        <Typography variant="h5">{text ? text.replace('_', ' ') : 'UTC Time'}</Typography>
        <Typography variant="h3">{formatTime(now, text, int)}</Typography>
      </Box>
      <Box ml={1}>
        {editClock && (
          <Box>
            <EditButton text={text} setChosen={setChosen} editClock={editClock} zoneOptions={zoneOptions} />
          </Box>
        )}
        {openAlert && (
          <Box>
            <IconButton aria-label="delete" onClick={() => openAlert(text)}>
              <DeleteIcon color="error" fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Clock
