import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileNav from './ProfileNav'
import { Link } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoaderContext' 
import TopLoadingBar from './TopLoadingBar'

const Navbar = () => {
    // const { progress, setProgress } = useTopLoader()  
    return (
        <>
            {/* <TopLoadingBar progress={progress} setProgress={setProgress} /> */}
            <div className='w-full'>
            <nav className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://envs.sh/ltG.jpg" className="h-8 w-8 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Smart Canteen</span>
                </Link>
                <ProfileNav/>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navbar
