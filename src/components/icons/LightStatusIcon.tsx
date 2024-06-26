import React from 'react'
import { CustomIcon } from '.'

const LightStatusIcon = ({ isLightOn}) => {
    return (
        <CustomIcon svg={<svg
            fill="none"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M2 6a6 6 0 1110.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0110.5 13a.5.5 0 010 1 .5.5 0 010 1l-.224.447a1 1 0 01-.894.553H6.618a1 1 0 01-.894-.553L5.5 15a.5.5 0 010-1 .5.5 0 010-1 .5.5 0 01-.46-.302l-.761-1.77a1.964 1.964 0 00-.453-.618A5.984 5.984 0 012 6zm6-5a5 5 0 00-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 008 1z"  fill={isLightOn?'red':'black'}/>
        </svg>

        } />
    )
}

export default LightStatusIcon