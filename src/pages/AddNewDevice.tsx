import React from 'react'
import '../css/HomePage.css'
import '../css/AddDevice.module.css'
import { Box, Page, useNavigate } from 'zmp-ui'
import { AppBar, IconButton, Toolbar, Typography , Button} from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
const AddNewDevicePage = () => {
    const navigate =useNavigate();
  return (
    <Page className='home-page'>
        <Box className='content'>
            <AppBar position='static' >
                <Toolbar sx={{bgcolor:'#0A182E', display:'flex', justifyContent:'space-between'}}>
                    <IconButton onClick={()=>{navigate(-1)}}>
                        <ArrowBack sx={{color:'white'}}/>

                    </IconButton>
                    <Typography>Add Device</Typography>
                    <Button sx={{color:'white', textTransform:'initial'}}>
                        <Typography>Save</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    </Page>
  )
}

export default AddNewDevicePage