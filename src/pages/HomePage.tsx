import React, { useDeferredValue, useState } from 'react'
import { Page, Text, Avatar, Icon, useNavigate } from 'zmp-ui'

import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import { BottomNavigation, Box, Button, Divider, IconButton, SwipeableDrawer, Tab, Tabs, Typography } from '@mui/material';
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
              <CustomPlusIcon/>
            </IconButton>
          </Box>
        </Box>
        {
          value === 0 ? <Box className='home-functions'>

            <FunctionalButton icon={<SofaIcon />} deviceQuantity={3} roomName={'Living Room'} />
            <FunctionalButton icon={<KitchenIcon />} deviceQuantity={3} roomName={'Kitchen'} />
            <FunctionalButton icon={<BathrommIcon/>} deviceQuantity={3} roomName={'Bathroom'} />
            <FunctionalButton icon={<BedroomIcon />} deviceQuantity={3} roomName={'Bedroom'} />
            <FunctionalButton icon={<GarageIcon />} deviceQuantity={3} roomName={'Garage'} />
            <FunctionalButton icon={<OfficeIcon />} deviceQuantity={3} roomName={'Office'} />
            <FunctionalButton icon={<KidsRoomIcon />} deviceQuantity={3} roomName={'Kids Room'} />
            <FunctionalButton icon={<TvIcon />} deviceQuantity={3} roomName={'TV Room'} />
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
      onOpen={() => { setAddDevice(true) }}>
        <Box className='bottom-drawer'>
          <Text.Title className='bottom-drawer-title'>Add New</Text.Title>
          <Divider className='bottom-drawer-divider' />

          <Button className='bottom-drawer-buttons' onClick={()=>{navigate('/newdevice')}}>
            <Box className='bottom-drawer-buttons-layout'>
              <KeySharp />
              <Text.Title>Add New Room</Text.Title>
            </Box>
          </Button>

          <Button className='bottom-drawer-buttons' disabled>
            <Box className='bottom-drawer-buttons-layout'>
              <KeySharp />
              <Text.Title>Add New Device</Text.Title>
            </Box>
          </Button>


        </Box>
      </SwipeableDrawer>

    </Page>
  )
}

export default HomePage