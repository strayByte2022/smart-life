import { ArrowDropDownRounded } from '@mui/icons-material'
import { Typography, Divider, Box } from '@mui/material'
import React from 'react'


const ConsumptionSummaryCard = () => {
    return (
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
    )
}

export default ConsumptionSummaryCard