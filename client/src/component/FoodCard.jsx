import React from 'react'
import teaImage from "../assets/images/tea.jpg"
import { Link } from 'react-router-dom'
import { TiStar } from 'react-icons/ti'

const FoodCard = () => {
    return (


        <Link to={`/jfksjfkjgkjs`} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='relative w-full overflow-hidden'>
                <img class="rounded-t-lg" src={teaImage} alt="" />
                <div className='absolute text-[18px] top-2 left-2 bg-gray-900 text-white px-3 py-1 rounded-md'>
                    Tea
                </div>
            </div>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$2</h5>
                </a>
                <div className='overflow-hidden flex items-center justify-start gap-2'>
                    <span class="bg-green-100 mb-4 flex items-center justify-center gap-1 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"><TiStar />2</span>
                </div>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Buy Now
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </Link>

    )
}

export default FoodCard