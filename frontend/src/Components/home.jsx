import React, { useState } from 'react';
import { handleSignUp } from '../api/handleSignUp';
import { useNavigate } from 'react-router-dom';

const home = () => {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await handleSignUp(username, email, password);
        console.log(result);
        setLoading(false);
    }

  return (
    <>
    <div className='w-screen min-h-screen bg-gray-200 text-black flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Hello & Welcome</h1>
        <p>You can sign up and check everything!</p>
        <form 
            className='w-80 h-70 border rounded-2xl mt-10 flex flex-col justify-center items-center shadow-xl'>
            <p className='text-[15px] mr-50'>Email</p>
            <input 
                type='text'
                placeholder='youremail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border pl-5 placeholder:text-[12px] w-70 rounded-2xl'
            />

            <p className='text-[15px] mr-50 mt-5'>Password</p>
            <input 
                type='password'
                placeholder='your password'
                value={password}
                onChange={(e) => setPassword(e.target.password)}
                className='border pl-5 placeholder:text-[12px] w-70 rounded-2xl'
            />

            <p className='text-[15px] mr-50 mt-5'>UserName</p>
            <input 
                type='text'
                placeholder='your username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='border pl-5 placeholder:text-[12px] w-70 rounded-2xl'
            />

            <button 
                className='mt-5 w-50 h-10 bg-orange-400 rounded-2xl text-white shadow-xl cursor-pointer'
                onClick={handleSubmit}    
                disabled={loading}
            >
                {loading ? "Loading..." : "Continue"}
            </button>
        </form>

        <button 
            onClick={() => navigate("/usercard")}
            className='w-50 h-15 rounded-2xl text-white bg-purple-500 mt-10 cursor-pointer'>
            check users
        </button>
    </div>
    </>
  )
}

export default home;