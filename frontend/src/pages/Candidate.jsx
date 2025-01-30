import { useState } from 'react'

const Candidate = () => {
  const [isElection, setElection] = useState(true);
  
  return (
    <div className='h-full mt-4 flex flex-col gap-4 items-center'>
      { isElection ? (
          <p id='' className='text-center px-px py-px  w-1/6 rounded-md bg-slate-700 text-slate-200'>
          <span>
              Election close at: 
          </span>
          </p>
      ) : (
          <p id='' className='text-center px-px py-px  w-1/6 rounded-md bg-slate-700 text-slate-200'>
          <span>
              Next Election:  
          </span>
          </p>
      ) }

      <p className='text-center text-slate-200 text-3xl font-bold mt-10'>Candidates</p>
      <div className='w-full mt-6 py-8 px-12 grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div className='w-full text-slate-200 py-8 shadow-xl rounded-md'>
            <p className='text-center text-xl font-semibold text-blue-300'>President</p>
              <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 px-20 py-6'>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
              </div>

            <a href="" className='block w-max mx-auto px-5 py-0.5 rounded-md mt-6 bg-blue-500 hover:bg-blue-600'>Vote Now</a>
          </div>

          <div className='w-full text-slate-200 py-4 shadow-xl rounded-md'>
            <p className='text-center text-xl font-semibold text-blue-300'>President</p>
              <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 px-20 py-6'>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
                <div className='flex gap-2 items-center'>
                  <img className='h-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                  <p>Candidate 1</p>

                </div>
              </div>

            <a href="" className='block w-max mx-auto px-5 py-0.5 rounded-md mt-6 bg-blue-500 hover:bg-blue-600'>Vote Now</a>
          </div>
      </div>
    </div>
  )
}

export default Candidate