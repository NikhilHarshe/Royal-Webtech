import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className=' pb-7 pt-7 border-t-2 mt- bg-gray-200 '>
            <div className=' w-9/12 mx-auto'>
                <div className=' flex justify-between'>
                    {/* logo */}
                    <div>
                        <img src="https://image.pngaaa.com/979/1594979-middle.png" width={50} alt="" />
                        <div>Blue Pills</div>
                    </div>
                    {/* Address  */}
                    <div>
                        <h4 className=' font-semibold text-lg'>Address :</h4>
                        <p>Shop no. 1, Mallika Apartment, Ring Road, NIT Lay out, <br/>
                            Bhamati Parsodi Chowk, Nagpur, Nagpur, Maharashtra,
                            440022</p>
                        <div className=' flex gap-3'>
                        <h4 className=' font-semibold text-lg'>Contact No. :</h4>
                        <p> +91 9874563210</p>
                        </div>
                    </div>
                    {/* Web Info */}
                    <div className=' text-gray-800'>
                        <p onClick={() => navigate("/termscondi")} className=' cursor-pointer'>Terms And Conditions</p>
                        <p onClick={() => navigate("/privacypolicy")} className=' cursor-pointer'>Privacy And Policy</p>
                    </div>
                </div>
                <div className=' flex gap-3 justify-end'>
                    {/* logo */}
                    <FaFacebookF className=' text-blue-900 text-xl cursor-pointer' />
                    <FaInstagram className=' text-red-500 text-xl cursor-pointer' />
                    <FaLinkedinIn className=' text-blue-900 text-xl cursor-pointer' />
                </div>

            </div>
        </div>
    )
}

export default Footer
