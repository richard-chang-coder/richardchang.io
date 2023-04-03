import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/system';

import { useScroll, useTransform, motion} from "framer-motion"

const HeroContainer = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.common.black,
    background: 'radial-gradient(circle, rgba(57,60,59,1) 0%, rgba(17,26,23,1) 100%)'
}));

const HeroTitle = styled(Typography)(({theme}) => ({
    fontSize: 'calc(10vw + 4vh + 2vmin)', 
    transition: 'all 2s cubic-bezier(0.165,0.84,0.44,1)',
    whiteSpace: 'nowrap',
    lineHeight: '0.7',
    textTransform: 'uppercase',
    fontWeight: 500
}));

const HeroDescription = styled(Typography)(({theme}) => ({
    color: theme.palette.common.black,
    fontSize: 'calc(1vw + 4vh)', 
    fontWeight: 500
}));

const HeroImage = styled(Box)(({theme}) => ({
    width: 'calc(38vw + 3vh + 20vmin)',
    display: 'flex', 
    alignItems: 'end',
    height: '100%',
    'img' : {
        width: '100%'
    }
}));

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const motionHeroTitle = useTransform(scrollYProgress, [0,1], [0, -600])
    return (
        <HeroContainer sx={{
            bgcolor: "#111a17", 
            height: '100vh',
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
        }} >
            <Box sx={{
                position: 'absolute',
                textAlign: 'center',
                marginTop: '15vh',
                width: '100%',
                overflow: 'hidden'
                }}>
                <HeroTitle style={{x: motionHeroTitle }} component={motion.h1}>Richard Chang - Richard Chang</HeroTitle>
           
                {/* <HeroDescription >Frontend Developer</HeroDescription> */}
            </Box>
            <HeroImage>
                {/* <img  src={process.env.PUBLIC_URL + '/richard.png'} alt="richard"/> */}
            </HeroImage>
        </HeroContainer>
    )
}

export default Hero