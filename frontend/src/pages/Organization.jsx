import { useState } from 'react'
import OrgChart from '../components/OrgChart'



const Organization = () => {
    


  return (
    <div className='mt-4 flex flex-col gap-4 items-center'>
        
        <p className='text-slate-200 text-3xl font-bold mt-8'>Intel Organization Tree</p>
        <p className='text-sm text-slate-300'>2024 - 2025</p>
        <div className='gap-6 w-full p-8'>
            <OrgChart />
        </div>

    </div>
  )
}

export default Organization