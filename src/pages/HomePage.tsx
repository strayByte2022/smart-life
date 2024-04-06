import React, { useDeferredValue, useState } from 'react'
import { Page, Text, Avatar } from 'zmp-ui'

import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import { BottomNavigationAction, Box, Tab, Tabs, Typography } from '@mui/material';
import HomeTabs from '../components/Home/HomeTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlusIcon } from '../components/icons';


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
          <Box className='function-box'>
            <PlusIcon/>
          </Box>
          <Box className='function-box'>
            assad
          </Box>
          <Box className='function-box'>
            assad
          </Box>
          <Box className='function-box'>
            assad
          </Box>
          <Box className='function-box'>
            assad
          </Box>
          <Box className='function-box'>
            assad
          </Box>
          <Box className='function-box'>
            assad
          </Box>
          <Box className='function-box'>
            assad
          </Box>
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