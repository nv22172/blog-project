import React from 'react'
import Footer from './Footer'
import Header from './Header'

const MainLayout = ({children}) => {
  return (
    <div>
        <Footer/>
        {children}
        <Header/>
    </div>
  )
}

export default MainLayout