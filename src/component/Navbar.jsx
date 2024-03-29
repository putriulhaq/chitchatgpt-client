import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../src/asset/logo.png'
import { Link } from 'react-router-dom';

const ComNavbar = () => {
    return (

        <nav class="bg-[#FAF7ED] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/">
                <a class="flex items-center">
                    <img src={Logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-[#1C3C3B] font-semibold whitespace-nowrap dark:text-white">ChitChat</span>
                </a>
                </Link>
                
                <div class="flex md:order-2">
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-[#A7A49E] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#787470] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                        </li>
                        <li>
                            <a href="#service" class="block py-2 pl-3 pr-4 text-[#A7A49E] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#787470] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-[#A7A49E] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#787470] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}
export default ComNavbar;