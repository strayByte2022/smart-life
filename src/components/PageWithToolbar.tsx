import { ArrowBack } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'zmp-ui'
interface PageWithToolbarInterface{
    title:String,
    behavior: React.ReactNode;
}
const PageWithToolbar = ({title,behavior}:PageWithToolbarInterface) => {
    const navigate = useNavigate();
  return (
    <AppBar position='static' >
        <Toolbar sx={{ bgcolor: '#0A182E', display: 'flex', justifyContent: 'space-between' }}>

          <IconButton onClick={() => { navigate(-1) }}>
            <ArrowBack sx={{ color: 'white' }} />

          </IconButton>
          <Typography>{title}</Typography>
          <Button sx={{ color: 'white', textTransform: 'initial' }}>
            {behavior}
          </Button>
        </Toolbar>
      
      </AppBar>
  )
}

export default PageWithToolbar