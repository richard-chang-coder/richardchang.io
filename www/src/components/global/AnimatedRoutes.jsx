import React from 'react'

import { Route, Routes, useLocation } from "react-router-dom";

import { HomePage, PortfolioPage} from './../../pages'

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence initial={false} >
            <Routes key={location.pathname} location={location}>
                {/* <Route element={<ProtectedRoutes />}>
                    <Route element={<Dashboard/>} path="/" exact/>
                    <Route element={<Dashboard/>} path="/dashboard" />
                </Route>
                <Route exact path="/login" element={<Login/>}/> */}
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/portfolio" element={<PortfolioPage/>}/>
                <Route exact path="/portfolio/:id" element={<PortfolioPage/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes