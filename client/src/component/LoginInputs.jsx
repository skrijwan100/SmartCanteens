import React from 'react';
import { Link } from 'react-router';
import { handleSuccess, handleError } from './ErrorMessage'
import { useState } from 'react';
import { useNavigate } from 'react-router';
const LoginInputs = () => {
    const [loder, setLoder] = useState(false)
    const naviget=useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoder(true)
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
        const url=`${import.meta.env.VITE_BACKEND_URL}/api/v1/userauth/login`
        const responce= await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email:data.email,password:data.password})
        })
        const resdata= await responce.json()
        console.log(resdata);
        if(!resdata.status){
            setLoder(false)
          return handleError('Email or passowrd is wrong')
        }
        localStorage.setItem('auth-token',resdata.token)
        setLoder(false)
        naviget("/")
        setTimeout(()=>{
            location.reload()
        },1000)
        return handleSuccess('Login Successful')
    };

    return (
        <div className='flex items-center justify-center flex-col h-[70vh] w-[100%] xl:w-[30%]'>
            <h1 className='text-5xl text-left mb-[5rem]'>Login</h1>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center gap-4 mb-[3rem]'
            >
                <div id="poda">
                    <div className="glow"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>
                    <div className="white"></div>
                    <div className="border"></div>
                    <div id="main">
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            className="input"
                            required
                        />
                        <div id="pink-mask"></div>
                    </div>
                </div>

                <div id="poda">
                    <div className="glow"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>
                    <div className="darkBorderBg"></div>
                    <div className="white"></div>
                    <div className="border"></div>
                    <div id="main">
                        <input
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            className="input"
                            required
                        />
                        <div id="pink-mask"></div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative group">
                        <button
                            type='submit'
                            className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                        >
                            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                                <div className="relative z-10 flex items-center space-x-3">
                                    {loder?<div className="loader mr-[14px]"></div>:<div className='flex'><span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                                        Submit
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                    >
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                    </svg></div>}
                                </div>
                            </span>
                        </button>
                    </div>
                </div>
            </form>

            <h1>Don't have an account?<Link to='/signup'> <span className='text-blue-500'>Sign up</span></Link></h1>
        </div>
    );
};

export default LoginInputs;
