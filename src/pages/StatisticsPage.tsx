import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Page } from 'zmp-ui'
import UserAvatar from '../components/user-avatar'
import DayMonthYearTab from '../components/Home/DayMonthYearTab'
import { LineChart } from '@mui/x-charts'
import DetailModal from '../components/StatisticsPage/DetailModal'
import BottomMenu from '../components/Layout/BottomMenu'

const StatisticsPage = () => {
    // const handleTabChange=(newValue:number)=>
    // {   
    //     setSelectedStats(newValue)
    // }
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const [selectedStats, setSelectedStats] = React.useState('day');
    const [openModal, setOpenModal] = React.useState(false);
    useEffect(() => {
        console.log(selectedStats)
        console.log(width)
    }, [selectedStats])
    return (
        <Page>
            <AppBar position='static'>
                <Toolbar sx={{ bgcolor: '#0A182E', display: 'flex', justifyContent: 'space-between', minHeight: '80px' }}>
                    <Typography variant='h5'>Statistics</Typography>
                    <UserAvatar user={{
                        id: '',
                        name: '',
                        avatar: '',
                        idByOA: undefined,
                        isSensitive: undefined,
                        followedOA: undefined
                    }} />
                </Toolbar>

            </AppBar>
            <Stack sx={{ backgroundColor: '#0A182E' }}>
                <Box sx={{ display: 'flex', gap: '5px', paddingLeft:'10px'}}>
                    {/* so sorry i could have used Tabs of mui but it is fucking far more complicated than just spaming stuffs */}
                    <Button sx={{
                        color: 'white',
                        backgroundColor: selectedStats === "day" ? "red" : "transparent",
                        borderRadius: '50px',
                        ":hover": { backgroundColor: selectedStats === "day" ? "red" : "transparent" }
                    }} onClick={() => { setSelectedStats("day") }}>Day</Button>
                    <Button sx={{
                        color: 'white',
                        backgroundColor: selectedStats === "week" ? "red" : "transparent",
                        borderRadius: '50px',
                        ":hover": { backgroundColor: selectedStats === "week" ? "red" : "transparent" }
                    }} onClick={() => { setSelectedStats("week") }}>Week</Button>
                    <Button sx={{
                        color: 'white',
                        backgroundColor: selectedStats === "month" ? "red" : "transparent",
                        borderRadius: '50px',
                        ":hover": { backgroundColor: selectedStats === "month" ? "red" : "transparent" }
                    }} onClick={() => { setSelectedStats("month") }}>Month</Button>
                    {/* <DayMonthYearTab handleChange={handleTabChange} value={selectedStats}/> */}
                </Box>

                {
                    selectedStats === 'day' ? <LineChart
                        xAxis={[
                            {
                                data: [1, 2, 3, 5, 8, 10]

                            }
                        ]}
                        leftAxis={null}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true
                            }
                        ]}

                        width={width}
                        height={200}
                        sx={{
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                                strokeWidth: "0.5",
                                fill: "white"
                            },
                        }}
                        
                        margin={{ left: 20 }}
                        colors={['red', 'white']}
                        onMarkClick={()=>{
                            setOpenModal(true)
                        }}
                    /> : null

                }

                {
                    selectedStats === 'week' ? <LineChart
                        xAxis={[
                            {
                                data: [1, 2, 3, 5, 8, 10]

                            }
                        ]}
                        leftAxis={null}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true
                            }
                        ]}

                        width={width}
                        height={200}
                        sx={{
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                                strokeWidth: "0.5",
                                fill: "white"
                            },
                        }}

                        margin={{ left: 10 }}
                        colors={['red', 'white']}
                    /> : null

                }

                
{
                    selectedStats === 'month' ? <LineChart
                        xAxis={[
                            {
                                data: [1, 2, 3, 5, 8, 10]

                            }
                        ]}
                        leftAxis={null}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                area: true
                            }
                        ]}

                        width={width}
                        height={200}
                        sx={{
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                                strokeWidth: "0.5",
                                fill: "white"
                            },
                        }}

                        margin={{ left: 10 }}
                        colors={['red', 'white']}
                    />:null
                    
                 }
                 
            </Stack>
            <DetailModal handleClose={()=>{setOpenModal(false)}} isOpen={openModal}/>
            <BottomMenu/>
        </Page>
    )
}

export default StatisticsPage