import React from 'react'
import { Link } from 'react-router-dom'
import infoImage from '../assets/Info.svg'

const About = () => {
  return (
    <div className=' flex items-center justify-center h-full'>
          <img src={infoImage} className='h-[70%] rounded' alt="" />
          <div className='w-1/2 py-6 px-12 text-slate-300'>
            <p className='text-2xl text-start'>
                The iVote Voting System was created to empower members of our organization to participate in the democratic process of electing their leaders. 
                Our goal is to provide a seamless, transparent, and accessible platform where every member can cast their vote confidently and securely.
            </p>
            <p className='text-2xl text-start mt-6'>
                This voting system was developed to address the need for a fair, efficient, and transparent way to conduct elections within our organization. 
                Traditional voting methods often come with challenges such as limited accessibility, lack of transparency, and time-consuming processes.
            </p>
          </div>
        </div>
  )
}

export default About