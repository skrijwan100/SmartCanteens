import React from 'react'
import Register from '../component/Register'
import gifnew from "../assets/gifs/register.gif"
export default function Createaccount() {
  return (
    <div className='w-full heightContainer flex items-center justify-center gap-[4rem]'>
      <Register />
      <div className='hidden xl:flex '>
        <img src={gifnew} alt="" />
      </div>
    </div>
  )
}
