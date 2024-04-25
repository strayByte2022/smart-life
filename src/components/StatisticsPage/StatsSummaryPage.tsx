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
        <Dialog fullScreen open={open}>
            <Page>
                <AppBar >
                    <Toolbar sx={{ position: 'static', backgroundColor: '#0C1A32', display: 'flex' }}>
                        <IconButton onClick={() => { handleClose() }}>
                            <Close sx={{ color: 'white' }} />
                        </IconButton>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="body1" component="div">
                                {startDate} to {endDate}
                            </Typography>
                        </div>
                    </Toolbar>
                    
                </AppBar>
                
            </Page>

        </Dialog>
    )
}

export default StatsSummaryPage