import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'


const Layout = () => {
    return (
    <div className='min-h-screen  bg-slate-800'>
        <NavigationBar />

        <main className='h-screen' >
            <Outlet />
        </main>
        
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default Layout
