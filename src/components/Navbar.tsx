import { JSX, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useCookies } from "react-cookie";
import { COOKIES_NAME } from '../enums/public.enums';

export default function Navbar() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [cookies,  ,removeCookie] = useCookies([COOKIES_NAME.ACCESS_TOKEN, COOKIES_NAME.USER ]);

    const LogoutHandler = () => {
        removeCookie(COOKIES_NAME.ACCESS_TOKEN);
        removeCookie(COOKIES_NAME.USER);
    };
    

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
                            <Link to="/">Home</Link>
                                
                            </li>
                            <li className="text-white hover:text-indigo-200">
                            <Link to="/blogs">Blogs</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                            <Link to="/about">About Me</Link>
                            </li> 
            </ul>

            {(cookies.accessToken && cookies.user) ? (
                //حتما کلاس ها باید یکی باشن تا نمایش داده بشه
                <div className="mt-3 space-y-2 md:space-x-2 md:flex md:items-center">
                <a
                    href="javascript:void(0)" onClick={() => LogoutHandler()}
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                    Logout
                </a>
            </div>
            ) : (
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
            )}
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