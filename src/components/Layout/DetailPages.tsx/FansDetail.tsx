import { Box, Button, IconButton, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Add, Remove, Warning } from '@mui/icons-material';
import { useSnackbar } from 'zmp-ui';
const FansDetail = () => {
    function valuetext(value: number) {
        return `${value}RPM`;
    }

    const [fanspeed, setFanSpeed] = useState(0)
    const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
    const myHeaders = new Headers();
    const key = (import.meta.env.VITE_ADAFRUIT_KEY)?.toString() as string
    myHeaders.append("X-AIO-Key", key);
    myHeaders.append("Content-Type", "application/json");


    const requestOptions: Object = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const getFanSpeed = async () => {
        try {
            const respone = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-fanspeed/data/retain", requestOptions)
            const result = await respone.text()
            console.log(result)
            setFanSpeed(parseFloat(result))
        }
        catch (error) {
            console.log(error)
        }
    }

    const postFanSpeed = async (newSpeed) => {

        const raw = JSON.stringify({
            "value": newSpeed
        });
        const postOptions: Object = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        try {
            const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-fanspeed/data", postOptions);
            const result = await response.text();
            console.log("Post result: ", result)
        }
        catch (error) {
            console.log(error)
        }


    }
    const handleFanSpeedChange = async (newSpeed) => {
        setFanSpeed(newSpeed);
        postFanSpeed(newSpeed)

    }
    const handleOpenSnackBar = () => {
        openSnackbar({
            text: "Invalid fanspeed",
            type: "warning",
            duration: 5000,
            prefixIcon: <Warning />
        })
    }
    useEffect(() => {
        getFanSpeed()
    }, [])
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography>Fanspeed: </Typography>
                    <Typography>{fanspeed}</Typography>
                </Box>

                <Switch />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', gap: '40px', paddingRight: '20px' }}>
                <Box sx={{ display: 'grid', gap: '20px', alignContent: 'center' }}>
                    <Typography variant='h4' >
                        ± 1
                    </Typography>
                    <Typography variant='h4'>
                        ± 10
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{ display: 'flex', gap: '40px' }}>
                        <IconButton sx={{ border: 'solid' }} onClick={() => {

                            let newSpeed = fanspeed - 1
                            if (newSpeed < 0) {
                                handleOpenSnackBar()
                                return
                            }
                            handleFanSpeedChange(newSpeed)
                        }}>
                            <Remove />
                        </IconButton>
                        <IconButton sx={{ border: 'solid' }} onClick={() => {
                            let newSpeed = fanspeed + 1
                            if (newSpeed > 100) {
                                handleOpenSnackBar()
                                return
                            }
                            handleFanSpeedChange(newSpeed)

                        }}>
                            <Add />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '40px' }}>

                        <IconButton sx={{ border: 'solid' }} onClick={() => {
                            let newSpeed = fanspeed - 10
                            if (newSpeed < 0) {
                                handleOpenSnackBar()
                                return
                            }
                            handleFanSpeedChange(newSpeed)

                        }}>
                            <Remove />
                        </IconButton>
                        <IconButton sx={{ border: 'solid' }} onClick={() => {
                            let newSpeed = fanspeed + 10
                            if (newSpeed > 100) {
                                handleOpenSnackBar()
                                return
                            }
                            handleFanSpeedChange(newSpeed)
                        }}>
                            <Add />
                        </IconButton>
                    </Box>
                </Box>



            </Box>
        </Box>
    )
}

export default FansDetail