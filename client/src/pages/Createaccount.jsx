import React from 'react'
import Register from '../component/Register'
import gifnew from "../assets/gifs/registriongif.gif"
export default function Createaccount() {
  return (
    <div className='w-full  flex items-center justify-evenly'>
    <Register />
    <div className=' w-[30%]'>
      <img className='h-[460px]' src={gifnew} alt="" />
    </div>
  </div>
  )
}
