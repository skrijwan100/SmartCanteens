import React, { useState } from 'react'
import { handleSuccess, handleError } from './ErrorMessage'
import { useNavigate } from 'react-router'
import { useEmail } from '../contexts/emailContext'
const EmailVerify = ({ checkR }) => {
    const [pageShow, setpageShow] = checkR
    const [sendValue, setSendValue] = useState("")
    const [loder, setLoder] = useState(false)
    const naviget = useNavigate();
    const [emailV, setEmailV] = useEmail()
    const submitEmail = async (e) => {
        e.preventDefault();
        setLoder(true)
        
       
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/userauth/sendemail`
        const responce = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: sendValue })
        })
        const data = await responce.json();
        if (!data.status) {
            setLoder(false)
            return handleError("Error to send mail please try again.")
        }
        handleSuccess("OTP send to your email")
        setpageShow(false)
        setLoder(false)
        setSendValue("")
        setEmailV(sendValue)
    }

    const submitOtp = async (e) => {
        e.preventDefault();
        
        
        setLoder(true)
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/userauth/veryfiyotp`
        const responce = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userotp: sendValue })
        })
        const data = await responce.json()
        if (!data.status) {
            return handleError("OTP has not macthed")
        }
        handleSuccess("OTP has  macthed")
        setLoder(false)
        setSendValue("")
              naviget("/creataccount")

    }

    return (
        <div className='flex items-center justify-center flex-col h-[70vh] w-[30%]'>
            <h1 className='text-5xl text-left mb-[5rem]'>Sign up</h1>
            <form className='flex flex-col items-center justify-center gap-4 mb-[3rem]' onSubmit={pageShow ? submitEmail : submitOtp}>
                <div id="search-container">
                    <div className="nebula"></div>
                    <div className="starfield"></div>
                    <div className="cosmic-dust"></div>
                    <div className="cosmic-dust"></div>
                    <div className="cosmic-dust"></div>

                    <div className="stardust"></div>

                    <div className="cosmic-ring"></div>

                    <div id="main">
                        <input
                            className="input"
                            name="text"
                            type={pageShow ? `email` : `text`}
                            placeholder={`Enter your ${pageShow ? `Email` : `otp`}`}
                            value={sendValue}
                            onChange={(e) => setSendValue(e.target.value)}
                            required
                        />

                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative group">
                        <button
                            type='submit'
                            className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                        >
                            <span
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            ></span>
                            <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                                <div className="relative z-10 flex items-center space-x-3">
                                   {loder?<div class="loader mr-[14px]"></div>:<div className='flex'><span
                                        className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                    >{pageShow ? `Send OTP` : `Verify the OTP`}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                    >
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        ></path>
                                    </svg></div>}
                                </div>
                            </span>
                        </button>
                       
                    </div>
                </div>
            </form>

            <h1>Already have an account? <span className='text-blue-500'>Login</span></h1>
        </div>
    )
}

export default EmailVerify