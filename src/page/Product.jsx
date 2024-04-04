import React from 'react'
import ReactStars from "react-rating-stars-component";
import { TiStarFullOutline } from "react-icons/ti"
import img1 from "../Components/assets/SliderImage/KAM4UK-Kamagra-Oral-Jelly-400x400.jpg"
import { BuyProduct, tempdata } from '../services/opretions/paymentApi';

const productData = {
    name: "Kamagra Oral Jelly 100mg",
    image: "",
    review: "6 reviews",
    cutprice: "1464.89",
    price: 10463.49,
    Manufacturer: "Ajanta Pharma",
    Composition: "SILDENAFIL 100 MG",
    Form: "Jelly",
    Packaging: "7 sachets/box",
    Shelf_life: "36 months",
    Usages: "For Erectile Dysfunction Treatment",
    Category: "Sildenafil Citrate",
};
const total_amount = productData.price;

const handelpayment = async() => {
    await BuyProduct(total_amount);
}

const Product = () => {
    return (
        <div className=' w-9/12 pt-28 mx-auto'>
            <div className=' flex '>
                <div>
                    <img src={img1} width={620} alt="product" />
                </div>
                <div className=' w-[70%] flex flex-col gap-6'>
                    <div>
                        <p className=' text-gray-500'>HOME / <a href="#">SILDENAFIL CITRATE</a> </p>
                        <h2 className=' text-3xl text-gray-900 font-semibold'>{productData.name} </h2>
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <div className=' flex gap-2 '>
                            <div className=' text-yellow-500 flex'>
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                            </div>
                            {productData.review}
                        </div>

                        <p className=' text-xl text-gray-900 font-semibold'>₹{productData.cutprice} - ₹{productData.price} </p>
                        {/* <button className=' bg-blue-600 p-2 rounded-md text-gray-200'>BUY NOW</button> */}
                        <div className=" w-24 rounded px-3 py-2 bg-blue-500 button" id="button-7" onClick={() => handelpayment()}>
                            <div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
                            <p>BUY NOW</p>
                        </div>
                    </div>

                    <div className=' ml-5 '>
                        <ul className=' list-disc flex flex-col gap-2'>
                            <li> <span className=' text- text-gray-900 font-semibold'>Manufacturer</span>  : {productData.Manufacturer} </li>
                            <li><span className=' text- text-gray-900 font-semibold'>Composition</span> : {productData.Composition} </li>
                            <li><span className=' text- text-gray-900 font-semibold'>Form</span> : {productData.Form} </li>
                            <li><span className=' text- text-gray-900 font-semibold'>Packaging</span> : {productData.Packaging}</li>
                            <li><span className=' text- text-gray-900 font-semibold'>Shelf life</span> : {productData.Shelf_life}</li>
                            <li><span className=' text- text-gray-900 font-semibold'>Usages</span> : {productData.Usages}</li>
                        </ul>
                    </div>

                    <div className=' flex gap-3 text-xs flex-col'>
                        <p>SKU: N/A</p>
                        <p><span>Category : </span> <a href="#" className=' text-blue-600'>{productData.Category}</a> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product
