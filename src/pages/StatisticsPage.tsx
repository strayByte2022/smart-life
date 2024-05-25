import { AppBar, Box, Button, Card, Stack, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Page } from 'zmp-ui'
import UserAvatar from '../components/user-avatar'
import DayMonthYearTab from '../components/Home/DayMonthYearTab'
import { LineChart } from '@mui/x-charts'
import DetailModal from '../components/StatisticsPage/DetailModal'
import BottomMenu from '../components/Layout/BottomMenu'
import StatsSummaryPage from '../components/StatisticsPage/StatsSummaryPage'


const StatisticsPage = () => {
    // const handleTabChange=(newValue:number)=>
    // {   
    //     setSelectedStats(newValue)
    // }
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const [selectedStats, setSelectedStats] = React.useState('day');
    const [openModal, setOpenModal] = React.useState(false);
    const [fullpageDetailDialog, setFullpageDetailDialog] = React.useState(false)
    const [humidity, setHumidity] = useState([0.0])
    const [temperature, setTemperature] = useState([0.0])

    const key = (import.meta.env.VITE_ADAFRUIT_KEY)?.toString() as string
    var myHeaders = new Headers();
    myHeaders.append("X-AIO-Key", key);
    var requestOptions: Object = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const fetchHumdiValue = async () => {
        try {
            // fetch 5 latest data
            const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-humidity/data?limit=6", requestOptions)
            const result = await response.json()
            let tempArray: number[] = []
            result.forEach(element => {

                tempArray.push(element?.value)
            })

            setHumidity(tempArray.reverse())
            console.log("Humidity: ", result)
        }
        catch (error) {
            console.log(error)
        }
    }
    const fetchTemperatureValue = async () => {
        try {
            // fetch 5 latest data
            const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-temperature/data?limit=6", requestOptions)
            const result = await response.json()
            let tempArray: number[] = []
            result.forEach(element => {

                tempArray.push(element?.value)
            })

            setTemperature(tempArray.reverse())
            console.log("Temperature: ", result)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchHumdiValue();
        fetchTemperatureValue();
    }, [])
    useEffect(() => {
        let interval = setInterval(() => {
            fetchHumdiValue()
            fetchTemperatureValue()
        }, 5000)
        return () => { clearInterval(interval) }
    }, [])
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
                <Box sx={{ display: 'flex', gap: '5px', paddingLeft: '10px', paddingBottom: '10px' }}>
                    {/* so sorry i could have used Tabs of mui but it is fucking far more complicated than just spaming stuffs */}
                    <Button sx={{
                        color: 'white',
                        backgroundColor: selectedStats === "day" ? "red" : "transparent",
                        borderRadius: '50px',
                        ":hover": { backgroundColor: selectedStats === "day" ? "red" : "transparent" }
                    }} onClick={() => { setSelectedStats("day") }}>Humidity Chart</Button>
                    <Button sx={{
                        color: 'white',
                        backgroundColor: selectedStats === "week" ? "red" : "transparent",
                        borderRadius: '50px',
                        ":hover": { backgroundColor: selectedStats === "week" ? "red" : "transparent" }
                    }} onClick={() => { setSelectedStats("week") }}>Temperature Chart</Button>

                    {/* <DayMonthYearTab handleChange={handleTabChange} value={selectedStats}/> */}
                </Box>

                {
                    selectedStats === 'day' ? <Card sx={{ borderRadius: 0, paddingTop: '10px' }}>
                        <LineChart

                            series={[
                                {
                                    data: humidity,
                                    color: 'red',
                                    label: "Humidity value"

                                },
                            ]}

                            width={width}
                            height={200}

                            margin={{ left: 30 }}
                        />
                    </Card> : null

                }

                {
                    selectedStats === 'week' ? <Card sx={{ borderRadius: 0, paddingTop: '10px' }}>
                        <LineChart

                            series={[
                                {
                                    data: temperature,
                                    color: 'red',
                                    label: "Temperature value"

                                },
                            ]}

                            width={width}
                            height={200}

                            margin={{ left: 30 }}
                        />
                    </Card> : null

                }



            </Stack>
            <DetailModal handleClose={() => { setOpenModal(false) }} isOpen={openModal} />

           
        </Page>
    )
}

export default StatisticsPage