import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const GlobalLayout = ({children}) => {
  return (
    <>
        <Navbar/>
          {children}
        <Footer/>
    </>
  )
}

export default GlobalLayout