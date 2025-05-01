import React from 'react'
import EmailVerify from '../component/EmailVerify'
import canteen from "../assets/images/foodcourt.jpg"
import ImageSlider from '../component/ImageSlider'
import FoodCard from '../component/FoodCard'

const Home = () => {
  return (
    <div className='w-full min-h-[85vh] flex items-center p-10 justify-start flex-col overflow-auto'>
      {/* <div className='w-[40rem] h-[20rem] rounded-[10px] flex items-start justify-start bg-amber-200 overflow-hidden boxShadow border border-gray-900'>
        <img src={canteen} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='w-full flex items-center justify-center mb-[2rem]'>
        <ImageSlider />
      </div> */}

      <div className='w-full min-h-[10rem] flex items-center justify-center flex-wrap gap-4'>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  )
}

export default Home