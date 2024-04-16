import { ArrowBack, KeyboardTab } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Button, Box, TextField, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Page } from 'zmp-ui'
import PageWithToolbar from '../components/PageWithToolbar'
import { styled } from '@mui/material/styles';
import { BathrommIcon, BedroomIcon, GarageIcon, KidsRoomIcon, KitchenIcon, OfficeIcon, SofaIcon, TvIcon } from '../components/icons'
import CustomRadioButton from '../components/AddRoom/CustomRadioButton'
import '../css/AddRoom.module.css'
const CSSTextField = styled(TextField)
{
  //  later nhak :D 
}
const AddNewRoomPage = () => {
  const navigate = useNavigate()
  return (
    <Page className='add-room-page'>
      <PageWithToolbar
        title={"Add room"}
        behavior={
          <Typography>Save</Typography>
        }

      />
      <Box sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '34px' }}>
        <Typography sx={{ color: 'grey' }}>Enter Room's Name</Typography>
        <TextField sx={{ border: 'grey', paddingTop: '6px' }} />
        <Box sx={{ paddingTop: '23px' }}>
          <Typography>Select Room's Icon</Typography>
          <Box>
            <RadioGroup sx={{display:'flex', flexDirection:'row', columnCount:'1', flexWrap:'wrap'}}>
              <CustomRadioButton controlIcon={<KitchenIcon/>} label="Kitchen"/>
              <CustomRadioButton controlIcon={<BedroomIcon/>} label="Bed Room"/>
              <CustomRadioButton controlIcon={<BathrommIcon/>} label="Bathroom"/>
              <CustomRadioButton controlIcon={<OfficeIcon/>} label="Office"/>
              <CustomRadioButton controlIcon={<TvIcon/>} label="TV Room"/>
              <CustomRadioButton controlIcon={<SofaIcon/>} label="Living Room"/>
              <CustomRadioButton controlIcon={<GarageIcon/>} label="Garage"/>
              <CustomRadioButton controlIcon={<BathrommIcon/>} label="Toilet"/>
              <CustomRadioButton controlIcon={<KidsRoomIcon/>} label="kid Room"/>
            </RadioGroup>
          </Box>
        </Box>
      </Box>

    </Page>
  )
}

export default AddNewRoomPage