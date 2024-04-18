import React from 'react'
import { Page } from 'zmp-ui'
import PageWithToolbar from '../PageWithToolbar'
import { Box, FormControlLabel, IconButton, Switch, Toolbar, Typography } from '@mui/material'
import { Add, AddAPhoto, AddAPhotoOutlined, Speaker } from '@mui/icons-material'
import { LightIcon } from '../icons'
import ThermostatIcon from '../icons/ThermostatIcon'
import FridgeIcon from '../icons/FridgeIcon'
import FansIcon from '../icons/FansIcon'
import SpeakerIcon from '../icons/SpeakerIcon'
import LightDetail from './DetailPages.tsx/LightDetail'
import ThermoDetail from './DetailPages.tsx/ThermoDetail'
import FridgeDetail from './DetailPages.tsx/FridgeDetail'
import FansDetail from './DetailPages.tsx/FansDetail'
import SpeakerDetail from './DetailPages.tsx/SpeakerDetail'
interface RomDetailPage {
  pageTitle: string,

}
const RoomDetailPage = ({ pageTitle }) => {
  const [detailPage, setDetailPage] = React.useState("light")
  return (
    <Page >
      <PageWithToolbar title={pageTitle} behavior={<Add />} />
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', background: '#ffff' }}>
        <IconButton onClick={() => { setDetailPage("light") }}><LightIcon chosenIcon={detailPage} /></IconButton>
        <IconButton onClick={() => { setDetailPage("thermo") }}><ThermostatIcon chosenIcon={detailPage} /></IconButton>
        <IconButton onClick={() => { setDetailPage("fridge") }}><FridgeIcon chosenIcon={detailPage} /></IconButton>
        <IconButton onClick={() => { setDetailPage("fans") }}><FansIcon chosenIcon={detailPage} /></IconButton>
        <IconButton onClick={() => { setDetailPage("speaker") }}><SpeakerIcon chosenIcon={detailPage} /></IconButton>
      </Toolbar>
      <Box sx={{ paddingLeft: '20px', paddingTop: '20px' }}>
        {
          detailPage === 'light' && <LightDetail/>

        }
        {
          detailPage === 'thermo' && <ThermoDetail/>
          
        }
        {
          detailPage === 'fridge' && <FridgeDetail/>
          
        }
        {
          detailPage === 'fans' && <FansDetail/>
          
        }
        {
          detailPage === 'speaker' && <SpeakerDetail/>
          
        }
      </Box>
    </Page>
  )
}

export default RoomDetailPage