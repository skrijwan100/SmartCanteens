import React from 'react'
import friend from "../assets/images/friend.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const Card = () => {
    return (

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

            <div class="flex flex-col items-center py-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src={friend} alt="Bonnie image" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="p-2 ms-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <FaLinkedin />
                    </a>
                    <a href="#" class="p-2 ms-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <FaGithub />
                    </a>
                    <a href="#" class="p-2 ms-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <BsGlobe2 />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Card