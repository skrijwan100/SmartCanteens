import React from 'react'

export default function Createaccount() {
  const [emailV, setEmailV] = useEmail()
  return (
    <div>
      <input className='text-black' type="email" value={"skrijwan"} readOnly />
      <img src={gif} alt="" />
    </div>
  )
}
