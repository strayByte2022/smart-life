import React, { useEffect } from 'react'
import '../css/HomePage.css'
import '../css/AddRoom.module.css'
import { Page, useNavigate } from 'zmp-ui'
import { AppBar, IconButton, Toolbar, Typography, Button, Card, Box } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { requestCameraPermission } from "zmp-sdk/apis";

const AddNewDevicePage = () => {
    const requestCamera = async () => {
        try {
            const { userAllow, message } = await requestCameraPermission({});
            if (userAllow) {
                // được phép sử dụng camera
                console.log("Allowed")
            }
        } catch (error) {
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    };
    useEffect(()=>{
        requestCamera();
    },[])
    const navigate = useNavigate();
    return (
        <Page className='home-page'>
            <Box className='content'>
                <AppBar position='static' >
                    <Toolbar sx={{ bgcolor: '#0A182E', display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton onClick={() => { navigate(-1) }}>
                            <ArrowBack sx={{ color: 'white' }} />

                        </IconButton>
                        <Typography>Add Device</Typography>
                        <Button sx={{ color: 'white', textTransform: 'initial' }}>
                            <Typography>Save</Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Typography variant='h5' sx={{ display: 'flex', textAlign: 'center', paddingTop: '10vh' }}>Scan with the QRCode
                    your device will connect automaticaly</Typography>
                <Box className='flex justify-center p-20'>
                    <Card sx={{ border: 'dashed', borderColor: '#E02020', height: '30vh', width: '30vh' }} />

                </Box>

            </Box>
        </Page>
    )
}

export default AddNewDevicePage