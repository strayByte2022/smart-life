import React, { useDeferredValue, useState } from 'react'
import { Page, Text, Avatar, Icon, useNavigate } from 'zmp-ui'

import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import { BottomNavigation, Box, Button, Divider, IconButton, SvgIcon, SwipeableDrawer, Tab, Tabs, Typography } from '@mui/material';
import HomeTabs from '../components/Home/RoomDeviceTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BathrommIcon, BedroomIcon, CustomIcon, CustomPlusIcon, GarageIcon, KidsRoomIcon, KitchenIcon, OfficeIcon, SofaIcon, TvIcon } from '../components/icons';
import { FunctionalButton } from '../components/Home';
import { BarChart, Cyclone, Home, KeySharp, Settings } from '@mui/icons-material';
import RoomDeviceTab from '../components/Home/RoomDeviceTab';




const HomePage: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);
  const [addDevice, setAddDevice] = React.useState(false);

  const callAddDevice = () => {
    setAddDevice(true);
  }


  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleDetailNaviagation = ()=>{
    navigate("test")
  }
  return (
    <Page className='home-page'>
      <Box className='content'>
        <Box className='top-box' >

          <Box className='title-box'>
            <Text.Title className='home-text'>Home</Text.Title>
            <Box className='avatar'><Avatar size={50} online story='default' src='http://h5.zdn.vn/static/images/avatar.png' /></Box>

          </Box>
          <Box className='tab-and-add-button'>

            <RoomDeviceTab handleChange={handleChange} value={value} />
            <IconButton onClick={callAddDevice}>
              <SvgIcon sx={{width:'5vh', height:'5vh'}}>
                <svg width="10" height="10" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z" fill="#EF3024" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17 8C16.5858 8 16.25 8.33579 16.25 8.75V16.25H8.75C8.33579 16.25 8 16.5858 8 17C8 17.4142 8.33579 17.75 8.75 17.75H16.25V25.25C16.25 25.6642 16.5858 26 17 26C17.4142 26 17.75 25.6642 17.75 25.25V17.75H25.25C25.6642 17.75 26 17.4142 26 17C26 16.5858 25.6642 16.25 25.25 16.25H17.75V8.75C17.75 8.33579 17.4142 8 17 8Z" fill="white" />
                </svg>
              </SvgIcon>
            </IconButton>
          </Box>
        </Box>
        {
          value === 0 ? <Box className='home-functions'>

            <FunctionalButton icon={<SofaIcon />} deviceQuantity={3} roomName={'Living Room'} handleClick={()=>{console.log("Living room  ")}} />
            <FunctionalButton icon={<KitchenIcon />} deviceQuantity={3} roomName={'Kitchen'} handleClick={()=>{navigate('/test')}} />
            <FunctionalButton icon={<BathrommIcon />} deviceQuantity={3} roomName={'Bathroom'} handleClick={()=>{console.log("asss")}} />
            <FunctionalButton icon={<BedroomIcon />} deviceQuantity={3} roomName={'Bedroom'} handleClick={()=>{console.log("asss")}} />
            <FunctionalButton icon={<GarageIcon />} deviceQuantity={3} roomName={'Garage'} handleClick={()=>{console.log("asss")}} />
            <FunctionalButton icon={<OfficeIcon />} deviceQuantity={3} roomName={'Office'} handleClick={()=>{console.log("asss")}} />
            <FunctionalButton icon={<KidsRoomIcon />} deviceQuantity={3} roomName={'Kids Room'} handleClick={()=>{console.log("asss")}} />
            <FunctionalButton icon={<TvIcon />} deviceQuantity={3} roomName={'TV Room'} handleClick={()=>{console.log("asss")}} />
          </Box> : <Box>
            <Text.Title>
              under development
            </Text.Title>
          </Box>
        }
      </Box>

      <Box className='bottom-navigation-bar'>
        <IconButton>
          <Home />
        </IconButton>

        <IconButton>
          <BarChart />
        </IconButton>

        <IconButton>
          <Cyclone />
        </IconButton>

        <IconButton>
          <Settings />
        </IconButton>
      </Box>
      <SwipeableDrawer
        anchor='bottom'
        open={addDevice}
        onClose={() => { setAddDevice(false) }}
        onOpen={() => { setAddDevice(true) }}
        sx={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderColor: 'black  ' }}

      >
        <Box className='bottom-drawer'>
          <Text.Title className='bottom-drawer-title'>Add New</Text.Title>
          <Divider className='bottom-drawer-divider' />
          <Box>
            <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: 'black', textTransform: 'initial', paddingLeft: '30px' }}
              onClick={() => { navigate('/newdevice') }}>
              <Box className='bottom-drawer-buttons-layout' sx={{ gap: '32px' }}>
                <KeySharp />
                <Text.Title>Add New Room</Text.Title>
              </Box>
            </Button>

            <Button sx={{ display: 'flex', justifyContent: 'flex-start', color: 'black', textTransform: 'initial', paddingLeft: '30px' }} onClick={() => { navigate('/newroom') }}>
              <Box className='bottom-drawer-buttons-layout' sx={{ gap: '32px' }}>
                <KeySharp />
                <Text.Title>Add New Device</Text.Title>
              </Box>
            </Button>
          </Box>



        </Box>
      </SwipeableDrawer>

    </Page>
  )
}

export default HomePage