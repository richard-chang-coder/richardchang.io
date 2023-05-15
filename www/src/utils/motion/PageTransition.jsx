import React from 'react'
import { motion } from "framer-motion"

const PageTransition = ({children}) => {
  return (
    <motion.div
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration: 0.75, ease: "easeOut" }}
        // exit={{opacity: 0}}
    >
            {children}
    </motion.div>
  )
}

export default PageTransition