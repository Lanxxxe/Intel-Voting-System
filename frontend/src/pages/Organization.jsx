import { useState } from 'react'

import adviser from '../assets/intel_images/adviser.jpg'
import president from '../assets/intel_images/president.jpg'
import vice from '../assets/intel_images/vicepresident.jpg'
import secretary from '../assets/intel_images/secretary.jpg'
import treasurer from '../assets/intel_images/treasurer.jpg'
import auditor from '../assets/intel_images/auditor.jpg'
import pio from '../assets/intel_images/pio-m.jpg'
import pio2 from '../assets/intel_images/pio.jpg'
import pubmat1 from '../assets/intel_images/pubmat1.jpg'
import pubmat2 from '../assets/intel_images/pubmat2.jpg'
import pubmat3 from '../assets/intel_images/pubmat3.jpg'
import pubmat4 from '../assets/intel_images/pubmat4.jpg'
import pubmat5 from '../assets/intel_images/pubmat5.jpg'
import pubmat6 from '../assets/intel_images/pubmat6.jpg'

// First Year Representative
import rep1F from '../assets/intel_images/rep1-f.jpg'
import rep1F2 from '../assets/intel_images/rep1-f2.jpg'
import rep1F3 from '../assets/intel_images/rep1-f3.jpg'
import rep1m from '../assets/intel_images/rep1-m.jpg'
import rep1m2 from '../assets/intel_images/rep1-m2.jpg'
import rep1m3 from '../assets/intel_images/rep1-m3.jpg'

// Second Year Representatives
import rep2m from '../assets/intel_images/rep2-m.jpg'
import rep2m2 from '../assets/intel_images/rep2-m2.jpg'
import rep2m3 from '../assets/intel_images/rep2-m3.jpg'
import rep2m4 from '../assets/intel_images/rep2-m4.jpg'
import rep2m5 from '../assets/intel_images/rep2-m5.jpg'
import rep2m6 from '../assets/intel_images/rep2-m6.jpg'
import rep2m7 from '../assets/intel_images/rep2-m7.jpg'

// Third Year Representative
import rep3m from '../assets/intel_images/rep3-m.jpg'
import rep3m2 from '../assets/intel_images/rep3-m2.jpg'
import rep3f from '../assets/intel_images/rep3-f.jpg'
import rep3f2 from '../assets/intel_images/rep3-f2.jpg'
import rep3f3 from '../assets/intel_images/rep3-f3.jpg'

// Fourth Year Representative
import rep4m from '../assets/intel_images/rep4-m.jpg'
import rep4m2 from '../assets/intel_images/rep4-m2.jpg'
import rep4m3 from '../assets/intel_images/rep4-m3.jpg'
import rep4f from '../assets/intel_images/rep4-f.jpg'
import rep4f2 from '../assets/intel_images/rep4-f2.jpg'




const Organization = () => {
    


  return (
    <div className='mt-4 flex flex-col gap-4 items-center'>
        
        <p className='text-slate-200 text-2xl font-bold'>Intel Organization Tree</p>
        <div className='grid grid-cols-3  gap-6 w-full p-8'>
            <div className='p-12 shadow-xl'>
                <img src={adviser} className='rounded-sm shadow-md' alt="" />
            </div>

            <div className='p-4'>
                <img src={president} className='rounded-sm shadow-md' alt="" />
            </div>

            <div className='p-4'>
                <img src={vice} className='rounded-sm shadow-md' alt="" />

            </div>

            <div className='p-4'>
                <img src={secretary} className='rounded-sm shadow-md' alt="" />
            </div>
            <div className='p-4'>
                <img src={treasurer} className='rounded-sm shadow-md' alt="" />
            </div>
            <div className='p-4'>
                <img src={auditor} className='rounded-sm shadow-md' alt="" />
            </div>
            <div className='p-4'>
                <img src={pio} className='rounded-sm shadow-md' alt="" />
            </div>
            <div className='p-4'>
                <img src={pio2} className='rounded-sm shadow-md' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Organization