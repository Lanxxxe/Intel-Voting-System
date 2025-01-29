import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../features/authSlice';
import authService from '../services/authService';

import votingsvg from '../assets/voting.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await authService.login({ email, password });
      dispatch(setCredentials(userData));
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <>
    <div className='h-screen flex items-center justify-center bg-slate-800'>
      <div className='w-2/6 h-3/4  rounded-s-md'>
          <img src={votingsvg} alt="Voting Image" />
      </div>
      <div className='flex flex-col items-center justify-center rounded-e-md bg-slate-900 w-2/6 h-3/4 px-8 tracking-wider'>
        {/* <p className='text-slate-200 mt-8'>Intel Voting System</p> */}
        <form className='text-slate-100 h-3/4 w-5/6 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <p className='font-bold text-4xl '>Intel <span className='text-red-400'>Voting</span> System</p>
          <p className='mt-2 text-xl font-bold'>Login</p>
            <div className=' w-full flex flex-col mt-10'>
              <label htmlFor="email" className='tracking-wider mb-px '>Email</label>
              <input
                className='placeholder-slate-400 text-slate-800 border-[0.5px] border-slate-200 bg-slate-200 rounded-sm py-2 px-2 mt-px focus:outline-slate-700'
                id='email'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
            <div className='w-full flex flex-col mt-6'>
              <label htmlFor="password" className='tracking-wider mb-px'>Password</label>
              <input
                className='placeholder-slate-400 text-slate-800 border-[0.5px] bg-slate-200 rounded-sm py-2 px-2 mt-px focus:outline-slate-700'
                id='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a className='underline underline-offset-4 text-blue-400 me-auto mt-2' href="">Forgot password?</a>
            <button className='w-full py-2 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer mt-16' type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
      </div>

    </div>
    </>
  );
};

export default Login;