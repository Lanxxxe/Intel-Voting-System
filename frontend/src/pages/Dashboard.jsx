import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import heroPage from '../assets/HeroPage.svg';


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className=' flex items-center justify-center h-full'>
      <img src={heroPage} className='h-[70%] rounded' alt="" />
      <div className='w-1/2 py-6 px-12 text-slate-300'>
        <h1 className='font-bold text-4xl'>Your Vote Shapes the Future of Your Organization!</h1>
        <p className='text-sm mt-2'>Make an informed decision and help elect the leaders who will represent you.</p>
        <div className='mt-8'>
          <p>Key Reminders</p>

          <ul className='list-disc px-10 mt-2'>
            <li>
              Know the candidates running for positions. Check their platforms, goals, and past contributions.
            </li>
            <li>
              Familiarize yourself with the responsibilities of each position (e.g., President, Vice President, Treasurer).
            </li>
            <li>
              Review the voting process, including deadlines, voting platform, and any required credentials.
            </li>
            <li>
              Consider how each candidate’s vision aligns with your goals for the organization.
            </li>
          </ul>
        </div>

        <Link className='mx-auto block w-[30%] mt-8 py-2 rounded-md text-center bg-red-500 hover:bg-red-600 text-slate-200'>Cast My Vote Now!</Link>
      </div>
    </div>
  );
};

export default Dashboard;