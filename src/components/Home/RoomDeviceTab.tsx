import { makeStyles, Tab, Tabs } from '@mui/material';
import React from 'react'


const RoomDeviceTab = ({value, handleChange}) => {
   
    return (
        <Tabs 
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { display: 'none' } }}
            
        >
            <Tab
                label={<div style={{color: value === 0 ? 'white' : 'grey'}}>Rooms</div>}
                
            />
            <Tab
                label={<div style={{color: value === 1 ? 'white' : 'grey'}}>Devices</div>}
                    
            />

        </Tabs>
    )
}

export default RoomDeviceTab