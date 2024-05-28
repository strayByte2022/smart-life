import React, { useEffect, useState } from 'react'
import { Page, useNavigate } from 'zmp-ui'
import BottomMenu from './BottomMenu'
import { Outlet } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Snackbar } from '@mui/material'
import HomeIcon from '../icons/HomeIcon'
import StatsIcon from '../icons/StatsIcon'
import SettingIcon from '../icons/SettingIcon'
import RoutineIcon from '../icons/RoutineIcon'

const PageWithBotMenu = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false)
  const [temperature, setTemperature] = React.useState(0)
  const key = (import.meta.env.VITE_ADAFRUIT_KEY)?.toString() as string
  var myHeaders = new Headers();
  myHeaders.append("X-AIO-Key", key);
  var requestOptions: Object = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const fetchTemperature = async () => {
    try {
      const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-temperature/data/retain", requestOptions)
      const result = await response.text()
      const temperature = parseFloat(result)
      setTemperature(temperature)
      setOpen(temperature >= 40 ? true : false)
      console.log("Temp for warning: ", result)
    }
    catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {

    const fetchInterval = setInterval(() => {
      fetchTemperature()

    }, 10000)
    return () => clearInterval(fetchInterval)

  }, [])
  useEffect(() => {
    fetchTemperature();
  }, [])

  const handleClose = () => {
    setOpen(false)
  }
  const navigate = useNavigate()
  return (
    <Page>


      <Outlet />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Warning!! Temperature is too high"

      />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction onClick={() => { navigate("/index/home") }} icon={<HomeIcon isChosen={""} />} />
        <BottomNavigationAction onClick={() => { navigate("/index/stats") }} icon={<StatsIcon isChosen={""} />} />
        <BottomNavigationAction icon={<RoutineIcon isChosen={""} />} />
        <BottomNavigationAction onClick={() => { navigate("/index/setting") }} icon={<SettingIcon isChosen={""} />} />
      </BottomNavigation>
    </Page>
  )
}

export default PageWithBotMenu