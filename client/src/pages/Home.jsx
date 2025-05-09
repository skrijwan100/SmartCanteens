import React from 'react'
import FoodCard from '../component/FoodCard'
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {

  const [foodItems, setFoodItems] = useState([]);
  const [loder, setLoder] = useState(false)

  useEffect(() => {
    const fecthfood = async () => {
      setLoder(true)
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/v2/foodwork/getallproducts`
      const res = await fetch(url, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(data.allfood);
      const data = await res.json();
      setFoodItems(data.allfood)
      setLoder(false)
    }
    fecthfood();
  }, []);

  return (
    <>
      {loder ? <div className='h-[84vh] flex justify-center items-center'><div class="loadermain"></div></div> : <div className='w-full min-h-[85vh] flex items-center p-10 justify-start flex-col overflow-auto'>

        <div className='w-full min-h-[10rem] flex items-center justify-center flex-wrap gap-4'>
          {foodItems.map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </div>
      </div>}
    </>
  )
}

export default Home