import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import {alpha} from '@mui/system';


import MotionInView from '../../hooks/MotionInView';


const SectionHeading = ({title, description, alignment}) => {

    return (
        <MotionInView>
            <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                <Box as="div" sx={{width: 50, height: 3, m: (title !== undefined ? '0 10px 0 0' : 'auto'),  backgroundColor:(theme) => alpha(theme.palette.common.black, 0.3)}}/>
                <Typography 
                    variant='subtitle1' 
                    as="span" 
                    sx={{
                
                        textTransform:'uppercase', 
                        fontWeight: 600, 
                        color: (theme) => alpha(theme.palette.common.black, 0.3) 
                    }}
                >
                    {title}
                </Typography>
            </Box>
            
            <Typography 
                variant='h2'
                sx={{mb: 3, fontWeight: 500}}
            >
                {description}
            </Typography>
       </MotionInView>
    )
}

SectionHeading.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default SectionHeading