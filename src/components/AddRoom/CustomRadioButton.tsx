import { Box, FormControlLabel, Typography } from '@mui/material'
import React from 'react'
interface CustomRadioButtonInterface {
    label: String,
    controlIcon: React.ReactNode
}
const CustomRadioButton = ({ label, controlIcon }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column',textAlign:'center', gap:'10px'
            
        }}>
            <FormControlLabel
                value={"top"}
                control={controlIcon}
                label={""}
                labelPlacement='bottom'
                sx={{
                    width: '80px',
                    height: '80px',
                    justifyContent:'center',
                    backgroundColor:'#f0f0f4',
                    borderRadius:'100%'

                }} />
            <Typography>{label}</Typography>
        </Box>
    )

}

export default CustomRadioButton