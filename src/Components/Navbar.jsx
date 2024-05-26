import React, { useState } from 'react'
import logo from "./assets/main_logo_picsel11.png"
import { IoSearch } from "react-icons/io5";
// import { SlBag } from "react-icons/sl";
import { BsChevronDown } from "react-icons/bs";

import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../slices/cartSlice';
import ProfileDropdown from './auth/ProfileDropdown';

const subLinks = [
    {
        title: "Erectile Dysfunction",
        link: "/catalog/Erectile_Dysfunction",
    },
    {
        title: "Premeture Ejaculation",
        link: "/catalog/Premeture_Ejaculation",
    },
    {
        title: "Medicines",
        link: "/catalog/Medicines",
    },
    {
        title: "Information",
        link: "/catalog/Information",
    },
];

const aboutLinks = [
    {
        title: "Our Members",
        link: "/about/Our_members"
    }
];

const Navbar = () => {
    const dispatch = useDispatch();
    const { Token } = useSelector((state) => state.auth);
    const {totalItems} = useSelector((state) => state.cart);

    console.log("Token ", Token);

    const openCart = () => {
        // console.log("bol n bhai ")
        dispatch(setCartOpen());
    }
    const [count, setCount] = useState(totalItems);



    const navigate = useNavigate();
    return (
        <div className=' mx-auto p-4 bg-gray-800 text-gray-300 font-semibold fixed w-full z-40'>
            <nav className=' w-9/12 flex justify-between  mx-auto '>
                <div>
                    {/* <a href="/"><img src={logo} width={150} alt="logo" /></a> */}
                    <a href="/"><img src="https://image.pngaaa.com/979/1594979-middle.png" width={40} alt="logo" /></a>

                </div>
                <ul className=' flex gap-3 items-center'>
                    <li className=' hover:text-gray-50 cursor-pointer' onClick={() => navigate("/")}>HOME</li>
                    {/* <li>ABOUT US</li> */}
                    <li
                        className={`group relative flex cursor-pointer items-center gap-1`}
                    >
                        <p className=' hover:text-gray-50 cursor-pointer'>ABOUT US</p>
                        <BsChevronDown />
                        <div className="invisible absolute left-[57%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-100 p-2 text-gray-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-100"></div>
                            {aboutLinks.map((subLink, i) => (
                                <div
                                    className="rounded-lg bg-transparent py-2 pl-2 hover:bg-gray-200"
                                    key={i}
                                >
                                    <p>{subLink.title}</p>
                                </div>


                                // <Link
                                //     to={`/catalog/${subLink.link}`}
                                //     className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                //     key={i}
                                // >
                                // <p>{subLink.title}</p>
                                // </Link>
                            ))}
                        </div>
                    </li>
                    {/* <li></li> */}
                    <li
                        className={`group relative flex cursor-pointer items-center gap-1`}
                    >
                        <p className=' hover:text-gray-50 cursor-pointer'>SEXUAL WELLNESS</p>
                        <BsChevronDown />
                        <div className="invisible absolute left-[74%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-100 p-2 text-gray-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-100"></div>
                            {subLinks.map((subLink, i) => (
                                <div
                                    className="rounded-lg bg-transparent py-2 pl-2 hover:bg-gray-200"
                                    key={i}
                                >
                                    <p>{subLink.title}</p>
                                </div>


                                // <Link
                                //     to={`/catalog/${subLink.link}`}
                                //     className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                //     key={i}
                                // >
                                // <p>{subLink.title}</p>
                                // </Link>
                            ))}
                        </div>
                    </li>
                    <li className=' hover:text-gray-50 cursor-pointer'>SHOP</li>
                    <li className=' hover:text-gray-50 cursor-pointer'>CONTACT US</li>
                    <li className=' bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-xl'>
                        <IoSearch />
                    </li>
                </ul>

                <div className=' flex gap-4'>
                    {Token ? (
                        <ProfileDropdown />
                    ) : (
                        <div className=' flex items-center gap-3'>
                            <button className=' hover:text-gray-50' onClick={() => navigate("/signIn")}>LOGIN</button>
                            <button className=' hover:text-gray-50' onClick={() => navigate("/signUp")}>SIGNUP</button>

                        </div>
                    )}

                    <button onClick={() => openCart()} className=' flex gap-2 hover:text-gray-50 group relative items-center'>
                        BASKET
                        {/* <SlBag className=' text-2xl hover:bg-gray-100' /> */}
                        <div className=' w-7 h-[30px] border-2  bg-gray-900 z-20 group-hover:text-gray-900 group-hover:bg-gray-50'>
                            {count}
                        </div>
                        <div className=' w-[15px] h-[15px] absolute rounded-full border-2 -top-1 left-[70px] group-hover:-top-[6px]'></div>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
