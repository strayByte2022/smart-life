import { Card, Modal, Typography } from '@mui/material'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
const DateRangePicker = () => {
    return (
        <Card>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeCalendar calendars={1} onChange={(e)=>{console.log(e[1]?.$d)}}/>
            </LocalizationProvider>
        </Card>
    )
}

export default DateRangePicker