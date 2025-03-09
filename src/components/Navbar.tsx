import { JSX, useState } from 'react';
// import { Link } from 'react-router-dom';
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Navbar() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const NAV: JSX.Element = (
        <nav className="w-full bg-purple-500 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="#">
                    <h2 className="text-2xl font-bold">LOGO</h2>
                </a>
                </div>
            </div>

            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                Home
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                Blogs
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                Dashboard
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                Aboutme
                            </li> 
            </ul>

            <div className="mt-3 space-y-2 md:space-x-2 md:flex md:items-center">
                                <a
                                    href="#"
                                    onClick={() => setShowLoginModal(true)}
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Signin
                                </a>
                                <a
                                    href="#"
                                    onClick={() => setShowRegisterModal(true)}
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Signup
                                </a>
            </div>
        </div>
        </nav>
    )

    return (
        <>
        {NAV}
        {showRegisterModal ? (<RegisterModal setShowRegisterModal={setShowRegisterModal} />) : null}
        {showLoginModal ? (<LoginModal setShowLoginModal={setShowLoginModal} />) : null}
        </>
    )
}