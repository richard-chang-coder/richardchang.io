import { Box } from '@mui/material'
import React from 'react'

import { motion } from "framer-motion";

const OldWebsite = () => {
  return (
    <motion.main
        className="main__container"
        initial={{ opacity: 0, scaleX: 1.2  }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{  opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <Box>
                <iframe src="https://old.basicrichard.com" title="old website" scroll="no" style={{
                    display: 'block',    
                    border: 'none', 
                    height: '100vh',        
                    width: '100vw',
                    overflow:'hidden'
                }}></iframe>
        </Box>
    </motion.main>
  )
}

export default OldWebsite