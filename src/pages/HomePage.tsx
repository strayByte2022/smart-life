import React, { useDeferredValue, useState } from 'react'
import { Page, Text, Avatar } from 'zmp-ui'

import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import { BottomNavigation, Box, Button, IconButton, Tab, Tabs, Typography } from '@mui/material';
import HomeTabs from '../components/Home/RoomDeviceTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BedroomIcon, CustomIcon, GarageIcon, KidsRoomIcon, KitchenIcon, OfficeIcon, SofaIcon, TvIcon } from '../components/icons';
import { FunctionalButton } from '../components/Home';
import { BarChart, Cyclone, Home, Settings } from '@mui/icons-material';
import RoomDeviceTab from '../components/Home/RoomDeviceTab';




const HomePage: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page className='home-page'>
      <Box className='content'>
      <Box className='top-box' >

        <Box className='title-box'>
          <Text.Title className='home-text'>Home</Text.Title>
          <Box className='avatar'><Avatar online story='default' src='http://h5.zdn.vn/static/images/avatar.png' /></Box>

        </Box>
        <Box >

          <RoomDeviceTab handleChange={handleChange} value={value} />

        </Box>
      </Box>
      {
        value === 0 ? <Box className='home-functions'>

          <FunctionalButton icon={<SofaIcon />} deviceQuantity={3} roomName={'Living Room'} />
          <FunctionalButton icon={<KitchenIcon />} deviceQuantity={3} roomName={'Kitchen'} />
          <FunctionalButton icon={<></>} deviceQuantity={3} roomName={'Living Room'} />
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
      

    </Page>
  )
}

export default HomePage