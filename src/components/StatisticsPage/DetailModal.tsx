import { ArrowDropDownRounded, Circle } from '@mui/icons-material'
import { Box, Button, Card, Divider, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import DateRangePicker from './DateRangePicker'
interface ModalInterface {
  isOpen: boolean,
  handleClose: any
}
const DetailModal = ({ isOpen, handleClose }: ModalInterface) => {
  const [isDetailCard, setIsDetailCard] = useState(true)
  return (
    <Modal open={isOpen} onClose={()=>{handleClose(); setIsDetailCard(true)}} sx={{ alignContent: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
      {isDetailCard?<Card variant='elevation' sx={{ height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>


        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '5%', paddingRight: '10px', paddingBottom: '10px' }}>
          <Typography>
            {<Circle sx={{ color: 'red', widows: '10px', height: '10px' }} />} DATE - YEAR`
          </Typography>
          <Button
            sx={{
              color: 'white', backgroundColor: 'red',
              ":hover": { color: 'white', backgroundColor: "red", opacity: 0.8 },
              borderRadius: '10px'


            }}
            onClick={()=>{setIsDetailCard(false)}}
          >Choose Date</Button>
        </Box>

        <Divider />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ fontWeight: 'bold' }} variant='h4'>000 </Typography>
              <Typography >KWH</Typography>
            </Box>
            <Typography sx={{ minWidth: 0 }}>{<ArrowDropDownRounded sx={{ color: '#027AFF' }} />}Decrease 27%</Typography>
          </Box>

          <Divider orientation='vertical' variant='middle' flexItem />

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ fontWeight: 'bold' }} variant='h4'>000 </Typography>
              <Typography >hours</Typography>
            </Box>
            <Typography sx={{ minWidth: 0 }}>{<ArrowDropDownRounded sx={{ color: '#027AFF' }} />}Decrease 27%</Typography>
          </Box>
        </Box>

        <Button sx={{ width: '100%', color: 'white', backgroundColor: '#027AFF', borderRadius: 0 }}>View Detail</Button>

      </Card>:<DateRangePicker/>
      }
    </Modal>
  )
}

export default DetailModal