import React, { useState } from 'react'
import EmailVerify from '../component/EmailVerify'
import gifnew from "../assets/gifs/otpDark.gif"

const Signup = () => {
  const [pageShow, setpageShow] = useState(true)
  return (
    <div className='w-full h-[83vh] flex items-center justify-center'>
      <EmailVerify checkR={[pageShow, setpageShow]}/>
      <div className='hidden xl:flex w-[40%]'>
        <img src={gifnew} alt="" />
      </div>
    </div>
  )
}

export default Signup