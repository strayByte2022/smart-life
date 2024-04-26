import { Close } from '@mui/icons-material';
import { AppBar, Box, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
import ConsumptionSummaryCard from './ConsumptionSummaryCard';
import { Page } from 'zmp-ui';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StatsSummaryPage = ({ open, handleClose, startDate, endDate }) => {
    return (
        <Dialog fullScreen open={open} sx={{ display: 'flex', flexDirection: 'column' }}>


            <Toolbar sx={{ position: 'static', backgroundColor: '#0C1A32', display: 'flex' , color:'white'}}>
                <IconButton onClick={() => { handleClose() }}>
                    <Close sx={{ color: 'white' }} />
                </IconButton>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%' }}>
                    <Typography>{startDate} to {endDate}</Typography>
                </Box>
            </Toolbar>


            <ConsumptionSummaryCard />


        </Dialog>
    )
}

export default StatsSummaryPage