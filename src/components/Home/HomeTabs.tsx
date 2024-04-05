import { makeStyles, Tab, Tabs } from '@mui/material';
import React from 'react'


const HomeTabs = () => {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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

export default HomeTabs