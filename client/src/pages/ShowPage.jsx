import React from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import tea from "../assets/images/tea.jpg"
import { TiStar } from "react-icons/ti";
import { useParams } from 'react-router';

const ShowPage = () => {
    return (
        <div className='w-full min-h-[85vh] flex items-start p-10 justify-center overflow-auto border'>
            <div className='w-[40%] border h-[30rem] flex items-center justify-start flex-col gap-4'>
                <div className='w-full h-[4rem] border flex items-center justify-start gap-4'>
                    <a class="p-2 ms-2 w-[5rem] flex items-center justify-center gap-2 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <FaArrowLeft />  back
                    </div>
                </div>
                <div className='w-full '>
                    <img src={tea} alt="" />
                </div>
            </div>
            <div className='w-[40%] border h-[30rem]'>
                <h1>Food Name</h1>
                <div className='overflow-hidden flex items-center justify-start gap-2'>
                    <span class="bg-green-100 flex items-center justify-center gap-1 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"><TiStar />2</span>
                </div>
                <h1>$Price</h1>
                <p>
                    about food
                </p>
            </div>
        </div>:""
    )
}

export default ShowPage