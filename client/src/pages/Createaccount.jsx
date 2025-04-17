import React from 'react'
import { useEmail } from '../contexts/emailContext'

export default function Createaccount() {
  const [emailV, setEmailV] = useEmail()
  return (
    <div>
      <input className='text-black' type="email" value={"skrijwan"} readOnly />
    </div>
  )
}
