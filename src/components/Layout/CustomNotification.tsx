import { SupervisedUserCircle } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const CustomNotification = ({message, time}) => {
    return (
        <Card sx={{display:'flex', justifyContent:'space-between',textAlign:'center'}}>
            <Box sx={{display:'flex',gap:'5px',paddingLeft:'10px', paddingRight:'10px', paddingTop:'10px', height:'50px'}}>
                <SupervisedUserCircle/>
                <Typography>{message}</Typography> 
            </Box>
            <Typography sx={{textAlign:'center', paddingRight:'10px'}}>{time}</Typography>
        </Card>
    )
}

export default CustomNotification