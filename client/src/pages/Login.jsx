import React from 'react'
import gifnew from "../assets/gifs/gifnew.gif"
import LoginInputs from '../component/LoginInputs'

const Login = () => {
  
  return (
    <div className='w-full h-[85vh] flex items-center justify-center'>
      <LoginInputs />
      <div className='hidden xl:flex w-[40%]'>
        <img src={gifnew} alt="" />
      </div>
    </div>
  )
}

export default Login