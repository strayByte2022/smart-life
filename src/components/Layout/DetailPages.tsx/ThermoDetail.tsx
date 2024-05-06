import { Box, Switch, Typography } from '@mui/material'
import { Gauge, gaugeClasses, GaugeReferenceArc, GaugeValueArc } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import { Button } from 'zmp-ui'

const ThermoDetail = () => {
    const [temperature, setTemperature] = useState(0)

    var myHeaders = new Headers();
    myHeaders.append("X-AIO-Key", "aio_yGID980zvglJif4Ld8TCBTuZhaB4");
    var requestOptions: Object = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const fetchTemperature = async () => {
        const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-temperature/data/retain", requestOptions)
        const result = await response.text()
        setTemperature(parseFloat(result))
        console.log(result)
    }

    useEffect(() => {

        const fetchInterval = setInterval(() => {
            fetchTemperature()
        }, 10000)
        return () => clearInterval(fetchInterval)

    }, [])
    useEffect(() => {

        fetchTemperature()
        console.log("Run in first time")
    }, [])
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography>Main thermo</Typography>
                    <Typography>Room_name</Typography>
                </Box>

                <Switch />
            </Box>
            <Box sx={{ display: 'flex', paddingTop: '40px' }}>
                <Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='h1' sx={{ color: temperature <=39?"#52b202":"red", }}>
                            {temperature}
                        </Typography>
                        <Typography variant='h2'>° </Typography>
                    </Box>

                    <Typography>Temperatue, Celcius</Typography>
                </Box>
                <Gauge width={100} height={200} value={temperature} startAngle={0} endAngle={-180} cornerRadius="50%" 
                    sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 40,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: temperature <=39?"#52b202":"red",
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: theme.palette.text.disabled,
                        },
                      })}
                    >
                    
                    
                </Gauge>
            </Box>

        </Box>
    )
}

export default ThermoDetail