import { Button, Card, Modal, Snackbar, Typography } from '@mui/material'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import StatsSummaryPage from './StatsSummaryPage';
import { MONTH_MAP } from '../constant/MonthMap';
import { useSnackbar } from 'zmp-ui';
import { Warning } from '@mui/icons-material';
const DateRangePicker = () => {
    const [openDetailDialog, setOpenDetailDialog] = React.useState(false)
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [openSnackbar, setOpeSnackBar] = React.useState(false)
    // const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
    if (!openDetailDialog) {
        return (

            <Card >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangeCalendar calendars={1} onChange={(e) => {

                        console.log(e)
                        console.log(`${e[0].$d.getDate()}` + "-" + `${MONTH_MAP.get(e[0].$d.getMonth())}` + "-" + `${e[0].$d.getFullYear()}`)
                        setStartDate(`${e[0].$d.getDate()}` + "-" + `${MONTH_MAP.get(e[0].$d.getMonth())}` + "-" + `${e[0].$d.getFullYear()}`)
                        setEndDate(`${e[1].$d.getDate()}` + " - " + `${MONTH_MAP.get(e[1].$d.getMonth())}` + " - " + `${e[1].$d.getFullYear()}`)
                    }} />
                </LocalizationProvider>
                <Button
                    sx={
                        {
                            width: '100%', color: 'white', backgroundColor: 'red', borderRadius: 0,
                            ":hover": { color: 'white', backgroundColor: 'red', opacity: 0.8 }
                        }}
                    onClick={() => {
                        if (startDate != '' && endDate != '') {
                            setOpenDetailDialog(true)
                        }
                        setOpeSnackBar(true)
                    }
                    }
                >View Detail</Button>
                <Snackbar 
                open={openSnackbar} 
                onClose={()=>{setOpeSnackBar(false)}} 
                message="⚠️ Please enter valid date range"
                autoHideDuration={5000} ></Snackbar>
            </Card >




        )
    }
    else {
        return (
            <StatsSummaryPage open={openDetailDialog} handleClose={() => { setOpenDetailDialog(false); }} startDate={startDate} endDate={endDate} />
        )
    }


}

export default DateRangePicker