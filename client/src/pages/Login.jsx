import React from 'react'
import EmailVerify from '../component/EmailVerify'
import gifnew from "../assets/gifs/gifnew.gif"
import LoginInputs from '../component/LoginInputs'

const Login = () => {
  
  return (
    <div className='w-full heightContainer flex items-center justify-center'>
      <LoginInputs />
      <div className='hidden xl:flex w-[40%]'>
        <img src={gifnew} alt="" />
      </div>
    </div>
  )
}

export default Login