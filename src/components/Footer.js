import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../resources/images/WE-full-logo.png'

function Footer() {
    return (
        <footer className="text-gray-600 body-font shadow-lg">
            <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link
                        to=""
                        className=" flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                    >
                        <i className="fas fa-cubes fa-lg text-purple-500"></i>
                        <img src={Logo} alt="wallempire logo" />
                    </Link>
                    <p className="mt-2 text-sm text-gray-500 text-justify">
                    <b>Wall-Empire</b> has been exponential advancing ever since inception with inspiration design, innovative texture and refreshing color is in product to production with a dedicated team of talented in-house designers.
                    </p>
                </div>
                <div
                    className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
                >
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                        <h2
                            className=" title-font font-medium text-black tracking-widest text-sm mb-3"
                        >
                            PRODUCT
                        </h2>
                        <nav className="list-none mb-5 space-y-1">
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Wallpaper</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Blinds</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Curtain</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Cushions</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Cushions</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                        <h2
                            className=" title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                        >
                            CORPORATE
                        </h2>
                        <nav className="list-none mb-5 space-y-1">
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >About Us</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Blog</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Career</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                        <h2
                            className=" title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                        >
                            CUSTOMERS
                        </h2>
                        <nav className="list-none mb-5 space-y-1">
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Contact Us</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Sitemap</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
                        <h2
                            className=" title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                        >
                            GET IN TOUCH
                        </h2>
                        <nav className="list-none mb-5 space-y-1">
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Leave Us a Feedback</Link>
                            </li>
                            <li>
                                <Link to="" className="text-gray-600 hover:text-gray-800"
                                >Request An Appointment</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 items-center">
                <div
                    className=" container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
                >
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2021 Copyright:
                        <Link
                            to="/"
                            className="text-gray-600 ml-1"
                        >WallEmpire</Link>
                    </p>
                    <span
                        className=" inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
                    >
                        <Link to="" className="text-gray-500">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="" className="ml-3 text-gray-500">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="" className="ml-3 text-gray-500">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="" className="ml-3 text-gray-500">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="" className="ml-3 text-gray-500">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
