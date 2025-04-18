import React from 'react'
import { useEmail } from '../contexts/emailContext'
export default function Createaccount() {
  const emailContext = useEmail()
  const [emailV] = emailContext || []
  return (
    <div>
      <input className='text-black' type="email" value={emailV} readOnly />
      <img src={gif} alt="" />
    </div>
  )
}
