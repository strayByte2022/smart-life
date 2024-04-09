import React from 'react'
import '../css/FunctionalButton.css'
import { Button, Typography } from '@mui/material';

interface ButtonInterface{
    icon:React.ReactNode;
    roomName: string
    deviceQuantity: number
}
const FunctionalButton = ({icon,roomName,deviceQuantity}) => {
    return (
        <Button className='function-button' sx={{ backgroundColor: 'white' }} >
            {icon}
            <Typography className='input-text'>{roomName}</Typography>
            <Typography className='input-text-low'>{`x${deviceQuantity} device(s)`}</Typography>
        </Button>
    )
}
export default FunctionalButton
