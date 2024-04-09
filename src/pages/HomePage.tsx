import React, { useDeferredValue, useState } from 'react'
import { Page, Text, Avatar } from 'zmp-ui'

import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import { BottomNavigationAction, Box, Button, Tab, Tabs, Typography } from '@mui/material';
import HomeTabs from '../components/Home/HomeTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BedroomIcon, CustomIcon, GarageIcon, KidsRoomIcon, KitchenIcon, OfficeIcon, SofaIcon, TvIcon } from '../components/icons';



const HomePage: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page className='home-page'>

      <Box className='top-box' >

        <Box className='title-box'>
          <Text.Title className='home-text'>Home</Text.Title>
          <Box className='avatar'><Avatar online story='default' src='http://h5.zdn.vn/static/images/avatar.png' /></Box>

        </Box>
        <Box >

          <HomeTabs handleChange={handleChange} value={value} />

        </Box>
      </Box>
      {
        value === 0 ? <Box className='home-functions'>
          <Button className='function-button' sx={{backgroundColor:'white'}}>
            <SofaIcon/>
          </Button>

          <Button className='function-button' sx={{backgroundColor:'white'}}>
            <KitchenIcon/>
          </Button>

          <Button className='function-button'sx={{backgroundColor:'white'}}>
            
          </Button>

          <Button className='function-button'sx={{backgroundColor:'white'}}>
            <BedroomIcon/>
          </Button>

          <Button className='function-button'sx={{backgroundColor:'white'}}>
            <GarageIcon/>
          </Button>

          <Button className='function-button'sx={{backgroundColor:'white'}}>
            <OfficeIcon/>
          </Button>

          <Button className='function-button'sx={{backgroundColor:'white'}}>
           <KidsRoomIcon/>
          </Button>

          <Button className='function-button' sx={{backgroundColor:'white'}}>
            <TvIcon/>
          </Button>
        </Box> : <Box>
          <Text.Title>
            under development
          </Text.Title>
        </Box>
      }


    </Page>
  )
}

export default HomePage