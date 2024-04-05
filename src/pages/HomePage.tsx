import React, { useDeferredValue } from 'react'
import { Page, Text, Avatar } from 'zmp-ui'

import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import { BottomNavigationAction, Box, Tab, Tabs, Typography } from '@mui/material';
import HomeTabs from '../components/Home/HomeTabs';


const HomePage: React.FunctionComponent = () => {


  return (
    <Page className='home-page'>

      <Box className='top-box' >

        <Box className='title-box'>
          <Text.Title className='home-text'>Home</Text.Title>
          <Box className='avatar'><Avatar online story='default' src='http://h5.zdn.vn/static/images/avatar.png' /></Box>

        </Box>
        <Box >

          <HomeTabs />

        </Box>
      </Box>

      <Box className='home-functions'>
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
        <Box className='function-box'>
          assad
        </Box>
      </Box>
      
    </Page>
  )
}

export default HomePage