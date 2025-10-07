import React from 'react';

const home = () => {
  return (
    <>
    <div className='w-screen min-h-screen bg-gray-200 text-black flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Hello & Welcome</h1>
        <p>You can sign up and check everything!</p>
        <div className='w-80 h-70 border rounded-2xl mt-10 flex flex-col justify-center items-center'>
            <p className='text-[15px] mr-50'>Email</p>
            <input 
                type='text'
                placeholder='youremail'
                className='border pl-5 placeholder:text-[12px] w-70 rounded-2xl'
            />

            <p className='text-[15px] mr-50 mt-5'>Password</p>
            <input 
                type='password'
                placeholder='your password'
                className='border pl-5 placeholder:text-[12px] w-70 rounded-2xl'
            />

            <p className='text-[15px] mr-50 mt-5'>UserName</p>
            <input 
                type='text'
                placeholder='your username'
                className='border pl-5 placeholder:text-[12px] w-70 rounded-2xl'
            />

            <button className='mt-5 w-50 h-10 bg-orange-400 rounded-2xl text-white shadow-xl cursor-pointer'>
                Continue
            </button>
        </div>
    </div>
    </>
  )
}

export default home;