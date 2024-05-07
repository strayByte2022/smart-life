import { Box, Button, IconButton, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import { Icon } from 'zmp-ui';
import { Add, PlusOne, Remove } from '@mui/icons-material';
const FansDetail = () => {
    function valuetext(value: number) {
        return `${value}RPM`;
    }

    const [fanspeed, setFanSpeed] = useState(0)
    const myHeaders = new Headers();
    myHeaders.append("X-AIO-Key", "aio_yGID980zvglJif4Ld8TCBTuZhaB4");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "value": fanspeed
    });
    const requestOptions: Object = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    const postOptions: Object = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    const getFanSpeed = async () => {
        const respone = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-fanspeed/data/retain", requestOptions)
        const result = await respone.text()
        console.log(result)
        setFanSpeed(parseFloat(result))
    }
    const postFanSpeed = async () => {

        const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-fanspeed/data", postOptions);
        const result = await response.text();
        console.log("Post result: ", result)

    }
    useEffect(() => {
        getFanSpeed()
    }, [])
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography>Onlyfans</Typography>
                    <Typography>{fanspeed}</Typography>
                </Box>

                <Switch />
            </Box>
            <Box sx={{ display: 'grid', justifyContent: 'center', paddingTop: '40px', gap: '40px' }}>
                <Box sx={{ display: 'flex', gap: '40px' }}>
                    <Typography>±1</Typography>
                    <IconButton sx={{ border: 'solid' }} onClick={(e) => { setFanSpeed(fanspeed - 1); postFanSpeed() }}>
                        <Remove />
                    </IconButton>
                    <IconButton sx={{ border: 'solid' }} onClick={() => { setFanSpeed(fanspeed + 1); postFanSpeed() }}>
                        <Add />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', gap: '40px' }}>
                    <Typography>±10</Typography>
                    <IconButton sx={{ border: 'solid' }} onClick={(e) => { setFanSpeed(fanspeed - 10); postFanSpeed() }}>
                        <Remove />
                    </IconButton>
                    <IconButton sx={{ border: 'solid' }} onClick={() => { setFanSpeed(fanspeed + 10); postFanSpeed() }}>
                        <Add />
                    </IconButton>
                </Box>

            </Box>
        </Box>
    )
}

export default FansDetail