import React from 'react'
import { Page, Box, Text, Avatar } from 'zmp-ui'
import '../css/HomePage.css'
import { userState } from "../state";
import { useRecoilValue } from "recoil";
import UserAvatar from '../components/user-avatar'
const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  return (
    <Page className='home-page'>

      <Box className='top-box' >

        <Box className='title-box'>
          <Text.Title className='home-text'>Home</Text.Title>
          <Box className='avatar'><UserAvatar user={user.userInfo}/></Box>
        </Box>
      </Box>

    </Page>
  )
}

export default HomePage