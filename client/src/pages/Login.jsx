import React from 'react'
import gifnew from "../assets/gifs/logif.gif"
import LoginInputs from '../component/LoginInputs'

const Login = () => {
  
  return (
    <div className='w-full heightContainer flex items-center justify-evenly'>
      <LoginInputs />
      <div className='hidden xl:flex w-[40%]'>
        <img  className='h-[300px]' src={gifnew} alt="" />
      </div>
    </div>
  )
}

export default Login