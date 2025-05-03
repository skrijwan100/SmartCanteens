import React from 'react'
import Card from '../component/Card'
import ImageSlider from '../component/ImageSlider'
import canteen from "../assets/images/foodcourt.jpg"
import rijwan from "../assets/images/rijwan.jpg"
import rakesh from "../assets/images/rakesh.jpeg"
import user3 from "../assets/images/user3.jpeg"
import user4 from "../assets/images/user4.jpeg"

const About = () => {

  const members = [
    {
      name : "Sk Rijwan",
      image : rijwan,
      role : "MERN Developer",
      linkedIn : "https://www.linkedin.com/in/tarapada-garai-1a9a5a257/",
      gitHub : "https://github.com/skrijwan100/",
      web : "https://skrijwan.vercel.app/"
    },
    {
      name : "Tarapada Garai",
      image : rakesh,
      role : "MERN Developer",
      linkedIn : "https://www.linkedin.com/in/tarapada-garai-1a9a5a257/",
      gitHub : "https://github.com/codingWithRakesh/",
      web : "http://tarapadagarai.tech/"
    },
    {
      name : "Akash Tiwari",
      image : user3,
      role : "MERN Developer",
      gitHub : "https://github.com/ak4ssh",
    },
    {
      name : "Prolay Ghosh",
      image : user4,
      role : "Front end Developer",
      linkedIn : "https://www.linkedin.com/in/prolay-ghosh-822232277/",
      gitHub : "https://github.com/Proloy772",
    }
  ]

  return (
    <div className='w-full min-h-[85vh] flex items-center justify-start flex-col gap-4 xl:p-[2rem] p-4'>
      <div className='w-full min-h-[10rem] flex items-center justify-center flex-wrap gap-4'>
        <div className='w-[40rem] relative h-[20rem] rounded-[10px] flex items-start justify-start bg-amber-200 overflow-hidden boxShadow border border-gray-900'>
          <img src={canteen} alt="" className='w-full h-full object-cover' />
          <div className='absolute w-full h-full bg-black opacity-50 flex items-center justify-center'>
            <h1 className='text-white text-3xl font-bold'>Food court</h1>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mb-[2rem]'>
          <ImageSlider />
        </div>
      </div>
      <div className='w-full min-h-[10rem]'>
        <h1 className='w-full h-8 mb-4 text-2xl'>Team member details</h1>
        <div className='w-full min-h-0 flex flex-wrap gap-4 justify-center items-center'>
          {members.map((member, index) => (
            <Card value={member} key={index} />
          ))}
      
        </div>
      </div>

    </div>
  )
}

export default About