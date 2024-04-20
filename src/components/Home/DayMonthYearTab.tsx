import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const DayMonthYearTab = ({ value, handleChange }) => {
    return (
        <Tabs
            value={value}
            onChange={handleChange}

            TabIndicatorProps={{ style: { display: 'none' } }}

        >
            <Tab
                label={<Box sx={{ color: 'white', backgroundColor: value === 0 ? 'red' : '' }}>Day</Box>}
                {...a11yProps(0)}
            />
            <Tab
                label={<Box sx={{ color: 'white', backgroundColor: value === 1 ? 'red' : '' }} key={1}>Month</Box>}
                {...a11yProps(1)}
            />
            <Tab
                label={<Typography sx={{ color: 'white', backgroundColor: value === 2 ? 'red' : '' }} key={2}>Year</Typography>}
                {...a11yProps(2)}
            />


        </Tabs>
    )
}

export default DayMonthYearTab