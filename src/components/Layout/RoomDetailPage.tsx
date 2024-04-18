import React from 'react'
import { Page } from 'zmp-ui'
import PageWithToolbar from './PageWithToolbar'
import { Typography } from '@mui/material'
interface RomDetailPage{
    pageTitle: string, 

}
const RoomDetailPage = ({pageTitle}) => {
  return (
    <Page>
        <PageWithToolbar title={pageTitle} behavior={<Typography>+</Typography>} />
        
    </Page>
  )
}

export default RoomDetailPage