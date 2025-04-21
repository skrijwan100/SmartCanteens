import React from 'react'
import Register from '../component/Register'
import gifnew from "../assets/gifs/registriongif.gif"
export default function Createaccount() {
  return (
    <div>
      <div className='w-full  flex items-center  justify-evenly'>

        <Register />
        <img className='h-[440px] mb-[55px] ' src={gifnew} alt="" />
      </div>
    </div>
  )
}
