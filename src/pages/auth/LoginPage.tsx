import React, { useEffect, useState } from "react";
import { ArrowBack, Lock, Warning } from "@mui/icons-material";
import { Button, Input, Page, useNavigate } from "zmp-ui";
import PageWithToolbar from "../../components/PageWithToolbar";
import { Box, Link, Typography } from "@mui/material";
import { useSnackbar } from 'zmp-ui';
const LoginPage = () => {
    const navigate = useNavigate();
    const key = (import.meta.env.VITE_ADAFRUIT_KEY)?.toString() as string
    const [email, setEmail] = useState("")
    const [fetchedPassword, setFetchedPassword] = useState("")
    const [password, setPassword] = useState("")


    const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
    const myHeaders = new Headers();
    myHeaders.append("X-AIO-Key", key);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions: Object = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const fetchPassword = async () => {
        const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-password/data/retain", requestOptions)
        const result = (await response.text()).trim()
        const finalResult = result.replace(/,+$/, "")
        setFetchedPassword(finalResult)
    }
    useEffect(() => {
        fetchPassword()
    }, [])


    const handlePasswordError = (email, password) => {
        if (password === "" || email === "") {
            openSnackbar({
                text: "Please enter password or email",
                type: "warning",
                duration: 5000,
                prefixIcon: <Warning />
            }
            )
            return
        }
        if (password !== fetchedPassword && password !== "") {
            openSnackbar({
                text: "Wrong password",
                type: "warning",
                duration: 5000,
                prefixIcon: <Warning />
            }
            )
            return
        }
        if (email !== "test@gmail.com" && email !== "") {
            openSnackbar({
                text: "Wrong email",
                type: "warning",
                duration: 5000,
                prefixIcon: <Warning />
            }
            )
            return
        }
        navigate('/index/home')
    }
    return (

        <Page>
            <PageWithToolbar title={"Login"} behavior={<></>} />
            <Box sx={{ display: 'grid', paddingLeft: '20px', paddingTop: '40px', paddingRight: '20px' }}>
                <Box sx={{ display: 'grid' }}>
                    <Typography>Enter email</Typography>
                    <Input onChange={(e) => { setEmail(e.target.value) }} />
                </Box>
                <Box sx={{ display: 'grid' }}>
                    <Typography>Enter password</Typography>
                    <Input.Password onChange={(e) => { setPassword(e.target.value) }} />
                </Box>
                <Typography>Not have account? <Link href="/signup">Sign Up</Link></Typography>
                <Box sx={{ paddingTop: '20px' }}><Button onClick={() => {
                    handlePasswordError(email, password)
                }}>Submit</Button></Box>
            </Box>
        </Page>
    );
};

export default LoginPage;
