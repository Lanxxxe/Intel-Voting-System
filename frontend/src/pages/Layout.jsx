import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const Layout = () => {
    return (
    <div className='min-h-dvh overflow-x-hidden bg-slate-800'>
        <NavigationBar />

        <main className='min-h-screen' >
            <Outlet />
        </main>
        
        <Footer />
        
    </div>
  )
}

export default Layout
