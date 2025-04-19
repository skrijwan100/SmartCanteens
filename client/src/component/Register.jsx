import React, { useState } from 'react'
import { useEmail } from '../contexts/emailContext'
import { useNavigate } from 'react-router'
import { handleSuccess, handleError } from './ErrorMessage'
import axios from 'axios'
export default function Register() {
    const emailContext = useEmail()
    const [userdata,setUserdata]=useState({username:"",address:"",password:"",repassword:""})
    const [selectedFile,setSelectedFile]=useState(null)
    const [emailV] = emailContext || []
    const naviget= useNavigate()
    const [loder,setLoder]=useState(false)
    const onchange=(e)=>{
          setUserdata({...userdata,[e.target.name]:e.target.value})
    }
    const handleupload=(e)=>{
        setSelectedFile(e.target.files[0]);
    }
    const handleuserdata =async(e)=>{
        e.preventDefault();
        setLoder(true)
        if(userdata.password!=userdata.repassword){
            return handleError("password not macthed.")
        }
        const formData = new FormData();
        if(selectedFile){

            formData.append("profilepic", selectedFile); 
        }
        const userdetiles=({
            name:userdata.username,
            email:emailV,
            address:userdata.address,
            password:userdata.password
        }) 
        formData.append("userDetails", JSON.stringify(userdetiles));
        try {
            const responce= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/userauth/register`,formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                }
            });
            if(responce.data.status){
                handleSuccess("Account is created")
                naviget("/login")
            }
        } catch (error) {
            console.log("Upload Error:", error);
            setLoder(false)
            return handleError("Some error happend")
        }

    }
    return (
        <div>
            <div className='flex items-center justify-center'><h1 className='text-5xl mt-1.5 mb-[2rem]'>Register</h1></div>
            <form onSubmit={handleuserdata} className='flex flex-col items-center justify-center gap-4 mb-[3rem]'>
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
                            name="username"
                            type='text' 
                            placeholder='Enter your Name'
                            required
                            onChange={onchange}
                            value={userdata.username} />

                    </div>
                </div>
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
                            type='email'
                            value={emailV}
                            readOnly
                            required
                            />

                    </div>
                </div>
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
                            name="address"
                            type='text'
                            placeholder='Enter your city'
                            required
                            onChange={onchange}
                            value={userdata.address} />

                    </div>
                </div>
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
                            name="password"
                            type='password'
                            placeholder='Password'
                            required
                            onChange={onchange}
                            value={userdata.password} />

                    </div>
                </div>
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
                            name="repassword"
                            type='password'
                            placeholder='Confirm password'
                            required
                            onChange={onchange}
                            value={userdata.repassword} />

                    </div>
                </div>
                <div id="search-container">
                    <div className="nebula"></div>
                    <div className="starfield"></div>
                    <div className="cosmic-dust"></div>
                    <div className="cosmic-dust"></div>
                    <div className="cosmic-dust"></div>

                    <div className="stardust"></div>

                    <div className="cosmic-ring"></div>

                    <div id="main">
                    {/* <span className="w-full text-center bg-amber-400 pad">Upload your file</span> */}
                        <input
                            type='file'
                            className="inputfile "
                            name="profilepic"
                            accept="image/*"    
                            onChange={handleupload}
                            required />
                            

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
                                    >Register</span>
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
        </div>
    )
}
