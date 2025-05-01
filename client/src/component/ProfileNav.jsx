import React, { useEffect, useState } from 'react'
import friend from "../assets/images/defalutuser.png"
import { Link } from 'react-router-dom'

const ProfileNav = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [userdelites, setuserdelites] = useState()
    const [pic, setpic] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(null)
    useEffect(() => {
        const authtoken = localStorage.getItem('auth-token')
        setisAuthenticated(authtoken)
        const getuser = async () => {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/userauth/getuser`
            const token = localStorage.getItem('auth-token')
            const responce = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token
                }
            })
            const userdata = await responce.json()
            console.log(userdata)
            setuserdelites(userdata)
            console.log(userdata.message.profilepic)
            setpic(true)
        }
        if (authtoken) {
            setIsLogin(true)
            getuser()
        }
    }, [])



    const handlelogout = () => {
        localStorage.removeItem('auth-token');
        location.reload()
    }

    return (
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLogin && isAuthenticated ? <>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    {pic && userdelites ? <img className="w-9 h-9 object-cover rounded-full cursor-pointer" src={userdelites.message.profilepic} alt="user photo" /> : <img className="w-16 h-16 object-cover rounded-full" src={friend} alt="user photo" />}
                </button>

                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                        {pic && <span className="block text-sm text-gray-900 dark:text-white">{userdelites.message.name}</span>}
                        {pic && <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userdelites.message.email}</span>}
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <div onClick={handlelogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</div>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </>
                :
                <>
                    <div className='flex items-center justify-center gap-4'>
                        <Link to="/login" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">Login</Link>
                        <Link to="/signup" className="text-white bg-[#4e5cf7] hover:bg-[#3342ec] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:[#4e5cf7] dark:hover:[#4e5cf7] cursor-pointer">Sign up</Link>
                    </div>
                </>}
        </div>
    )
}

export default ProfileNav