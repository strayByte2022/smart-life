import { ArrowBack } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  Page } from 'zmp-ui'

const AddNewRoomPage = () => {
  const navigate = useNavigate()
  return (
    <Page>
      <AppBar position='static' >
        <Toolbar sx={{ bgcolor: '#0A182E', display: 'flex', justifyContent: 'space-between' }}>

          <IconButton onClick={() => { navigate(-1) }}>
            <ArrowBack sx={{ color: 'white' }} />

          </IconButton>
          <Typography>Add Device</Typography>
          <Button sx={{ color: 'white', textTransform: 'initial' }}>
            <Typography>Save</Typography>
          </Button>
        </Toolbar>

      </AppBar>
    </Page>
  )
}

export default AddNewRoomPage