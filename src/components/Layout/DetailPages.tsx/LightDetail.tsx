import { Box, Switch, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Button } from 'zmp-ui'
import LightStatusIcon from '../../icons/LightStatusIcon'

const LightDetail = () => {
    const [switchState, setSwitchState] = React.useState(false)
    const myHeaders = new Headers();
    myHeaders.append("X-AIO-Key", "aio_yGID980zvglJif4Ld8TCBTuZhaB4");
    myHeaders.append("Content-Type", "application/json")
    const raw = JSON.stringify({
        "value": switchState ? 0 : 1
    });

    const requestOptions: Object = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    const turnLed = async () => {
        try {
            await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-led/data", requestOptions)
        } catch (error) {
            console.log(error)

        }

    }

    const getOptions: Object = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    const getLedState = async () => {
        const respone = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-led/data/retain", getOptions)
        const result = await respone.text()
        setSwitchState(parseInt(result) === 1)
        console.log(result)
    }
    useEffect(() => {
        getLedState()
    }, [])
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography>Main Lights</Typography>
                    <Typography>Room_name</Typography>
                </Box>

                <Switch checked={switchState} onChange={(e) => { setSwitchState(e.target.checked); turnLed() }} />
            </Box>
            <Box sx={{ display:'flex', justifyContent:'center',paddingTop: '40px' }}>

                <LightStatusIcon isLightOn={switchState} />



            </Box>
        </Box>
    )
}

export default LightDetail