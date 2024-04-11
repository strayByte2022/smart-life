import { SvgIcon } from '@mui/material'
import React from 'react'
interface SVG{
    svg: React.ReactNode;
}
const CustomIcon = ({svg}:SVG) => {
  return <SvgIcon style={{width:'50px', height:'50px'}}>
  {/* credit: plus icon from https://heroicons.com/ */}
  {svg}

</SvgIcon>
}

export default CustomIcon