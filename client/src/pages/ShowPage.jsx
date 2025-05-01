import React, { useState } from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import tea from "../assets/images/tea.jpg"
import { TiStar } from "react-icons/ti";

const ShowPage = () => {
    const backFun = () => {
        window.history.back()
    }
    const [quantity, setQuantity] = useState(0)
    const sendPriceALl = () =>{
        
    }
    return (
        <div className='w-full min-h-[85vh] flex items-center p-10 justify-center'>
            <div className='w-[40%] h-[30rem] flex items-center justify-start flex-col gap-4'>
                <div className='w-full h-[4rem] flex items-center justify-start gap-4'>
                    <div onClick={backFun} class="p-2 ms-2 w-[5rem] flex items-center justify-center gap-2 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <FaArrowLeft />  back
                    </div>
                </div>
                <div className='w-full '>
                    <img src={tea} alt="" />
                </div>
            </div>
            <div className='w-[40%] min-h-[20rem] p-[3rem] flex items-start justify-start flex-col rounded-2xl gap-4 bg-gray-900'>
                <h1 className='text-4xl'>Food Name</h1>
                <div className='overflow-hidden flex items-center justify-start gap-2'>
                    <span class="bg-green-100 flex items-center justify-center gap-1 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"><TiStar />2</span>
                </div>
                <h1 className='text-3xl'>$Price</h1>
                <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    about food
                </p>
                <div>
                    Quantity <input value={quantity} onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {  // allow only digits (no decimals, no negatives)
                            setQuantity(value);
                        }
                    }} type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <button onClick={sendPriceALl} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ShowPage