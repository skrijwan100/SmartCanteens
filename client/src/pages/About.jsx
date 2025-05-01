import React from 'react'
import Card from '../component/Card'

const About = () => {
  return (
    <div className='w-full min-h-[85vh] flex items-center justify-start flex-col gap-4 p-[2rem]'>
      <div className='w-full min-h-[10rem] '>
        about project
      </div>
      <div className='w-full min-h-[10rem]'>
        <h1 className='w-full h-8 mb-4 text-2xl'>Team member details</h1>
        <div className='w-full min-h-0 flex flex-wrap gap-4 justify-center items-center'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

    </div>
  )
}

export default About