import { BottomNavigationAction, BottomNavigation, Paper, Box, IconButton } from '@mui/material';
import React, { useState } from 'react'
import HomeIcon from '../icons/HomeIcon';
import StatsIcon from '../icons/StatsIcon';
import RoutineIcon from '../icons/RoutineIcon';
import SettingIcon from '../icons/SettingIcon';
import { useNavigate } from 'zmp-ui';


const BottomMenu = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState('home')
    useState(()=>{
        console.log(page)
    })
    return (
        <Paper sx={{ position: 'fixed',bottom:0, width: '100%', borderRadius:0}}>
            
            <Box sx={{ display: 'flex' , justifyContent:'space-between'}}>
                <IconButton onClick={()=>{setPage('home');navigate('/index/home'); }}><HomeIcon isChosen={page} /></IconButton>
                <IconButton onClick={()=>{setPage('stats'); navigate('/index/stats'); }}><StatsIcon isChosen={page} /></IconButton>
                <IconButton onClick={()=>{setPage('routine');navigate(''); }}><RoutineIcon isChosen={page}/></IconButton>
                <IconButton onClick={()=>{setPage('setting'); navigate('/index/setting'); }}><SettingIcon isChosen={page}/></IconButton>
            </Box>
        </Paper>
    )
}

export default BottomMenu