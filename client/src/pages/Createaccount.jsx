import React from 'react'
import Register from '../component/Register'
import gifnew from "../assets/gifs/registriongif.gif"
export default function Createaccount() {
  return (
    <div>
      <input className='text-black' type="email" value={emailV} readOnly />
      {/* <img src={gif} alt="" /> */}
    </div>
  )
}
