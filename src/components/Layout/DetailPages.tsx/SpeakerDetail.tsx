import { Box, Switch, Typography } from '@mui/material'
import React from 'react'

const SpeakerDetail = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography>Main speaker</Typography>
                    <Typography>Room_name</Typography>
                </Box>

                <Switch />
            </Box>
            <Box sx={{ paddingTop: '40px' }}>
                <div>

                </div>
            </Box>
        </Box>
    )
}

export default SpeakerDetail