import { Button, Card, Modal, Typography } from '@mui/material'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import StatsSummaryPage from './StatsSummaryPage';
import { MONTH_MAP } from '../constant/MonthMap';
const DateRangePicker = () => {
    const [openDetailDialog, setOpenDetailDialog] = React.useState(false)
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    
    if (!openDetailDialog) {
        return (

            <Card >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangeCalendar calendars={1} onChange={(e) => { 

                        console.log(e)
                        console.log(`${e[0].$d.getDate()}`+"-"+`${MONTH_MAP.get(e[0].$d.getMonth())}`+"-"+`${e[0].$d.getFullYear()}`)
                        setStartDate(`${e[0].$d.getDate()}`+"-"+`${MONTH_MAP.get(e[0].$d.getMonth())}`+"-"+`${e[0].$d.getFullYear()}`)
                        setEndDate(`${e[1].$d.getDate()}`+" - "+`${MONTH_MAP.get(e[1].$d.getMonth())}`+" - "+`${e[1].$d.getFullYear()}`)
                        }} />
                </LocalizationProvider>
                <Button
                    sx={
                        {
                            width: '100%', color: 'white', backgroundColor: 'red', borderRadius: 0,
                            ":hover": { color: 'white', backgroundColor: 'red', opacity: 0.8 }
                        }}
                    onClick={() => { setOpenDetailDialog(true) }}
                >View Detail</Button>
            </Card >




        )
    }
    else {
        return (
            <StatsSummaryPage open={openDetailDialog} handleClose={() => { setOpenDetailDialog(false); } } startDate={startDate} endDate={endDate} />
        )
    }


}

export default DateRangePicker