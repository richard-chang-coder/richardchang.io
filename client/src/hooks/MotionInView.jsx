import React, {useRef} from 'react'
import PropTypes from 'prop-types'

import { useInView } from 'framer-motion';

const MotionInView = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionAnimation = {
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s ease-in-out"
    };

    return (
        <div  ref={ref} style={motionAnimation}>
             {children}
        </div>
       
    )
}

MotionInView.propTypes = {}

export default MotionInView