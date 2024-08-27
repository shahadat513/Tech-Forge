import React from 'react';
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar flex justify-center items-center font-Lato">
                <div className="navbar-start">

                    <a className=" font-extrabold text-4xl  ">TechForge</a>
                </div>
                <div className="navbar-center justify-center items-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Home</a></li>
                        <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Product</a></li>
                        <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Add Product</a></li>
                        <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Cart</a></li>
                        <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Services</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <a className="btn hidden lg:flex font-Lato text-white bg-[#007580] rounded-2xl font-bold text-lg   border-0 duration-300"><LuLogIn /> Log In</a>
                    <div class="dropdown ">
                        <div tabindex="0" role="button" class="btn btn-circle  bg-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block h-5 w-5 stroke-current ">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 right-0 p-2  ">
                            <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Home</a></li>
                            <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Product</a></li>
                            <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Add Product</a></li>
                            <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Cart</a></li>
                            <li className='font-bold text-lg hover:text-[#F83758] duration-300 '><a>Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
