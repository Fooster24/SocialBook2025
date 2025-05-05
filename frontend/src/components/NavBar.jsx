import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxM3ExLjI1IDAgMi4xMjUtLjg3NVQxNSAxMHQtLjg3NS0yLjEyNVQxMiA3dC0yLjEyNS44NzVUOSAxMHQuODc1IDIuMTI1VDEyIDEzbS04IDdxLS44MjUgMC0xLjQxMi0uNTg3VDIgMThWNnEwLS44MjUuNTg4LTEuNDEyVDQgNGgxNnEuODI1IDAgMS40MTMuNTg4VDIyIDZ2MTJxMCAuODI1LS41ODcgMS40MTNUMjAgMjB6bTEuNzUtMmgxMi41cS0xLjEyNS0xLjQtMi43MjUtMi4yVDEyIDE1dC0zLjUyNS44VDUuNzUgMThNNSAyM3EtLjQyNSAwLS43MTItLjI4OFQ0IDIydC4yODgtLjcxMlQ1IDIxaDE0cS40MjUgMCAuNzEzLjI4OFQyMCAyMnQtLjI4OC43MTNUMTkgMjN6TTUgM3EtLjQyNSAwLS43MTItLjI4OFQ0IDJ0LjI4OC0uNzEyVDUgMWgxNHEuNDI1IDAgLjcxMy4yODhUMjAgMnQtLjI4OC43MTNUMTkgM3oiLz48L3N2Zz4=" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SocialBook</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                <a href="/list" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All Contacts</a>
                </li>
                <li>
                <a href="/add" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Contact</a>
                </li>
                <li>
                <a href="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    )
}

export default NavBar