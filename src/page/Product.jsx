import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { TiStarFullOutline } from "react-icons/ti"
import Image1 from "../Components/assets/SliderImage/KAM4UK-Kamagra-Oral-Jelly-400x400.jpg"
import { BuyProduct, tempdata } from '../services/opretions/paymentApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetCart, setCartClose } from '../slices/cartSlice';
import Cart from './Cart';
import { fetchProductDetails } from '../services/opretions/product';

// const productData = {
//     Name: "Kamagra Oral Jelly 100mg",
//     image: "",
//     review: "6 reviews",
//     cutprice: "14.00",
//     Price: 100.00,
//     Manufacturer: "Ajanta Pharma",
//     Composition: "SILDENAFIL 100 MG",
//     Form: "Jelly",
//     Packaging: "7 sachets/box",
//     Shelf_life: "36 months",
//     Usages: "For Erectile Dysfunction Treatment",
//     Category: "Sildenafil Citrate",
// };

const product = [
    {
        _id: "664c6dfe62269f02a9272058",
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },
    {
        _id: "664c6e3062269f02a927205a",
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },
    {
        _id: "664c6e3562269f02a927205c",
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "33%"
    },
    {
        _id: "664c6e3a62269f02a927205e",
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "47%"
    },
    {
        _id: "664c6e3f62269f02a9272060",
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "43%"
    },
    {
        _id: "664c6e4762269f02a9272062",
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "41%"
    },
    {
        _id: 7,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "47%"
    },
    {
        _id: 8,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "47%"
    },
    {
        _id: 9,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },
    {
        _id: 10,
        Name: "SILDENAFIL CITRATE",
        des: "Kamagra Oral Jelly 100mg",
        ImageSrc: "https://kam4uk.com/wp-content/uploads/2024/02/KAM4UK-Kamagra-Oral-Jelly.jpg",
        riview: "6",
        cutprice: 14.00,
        Price: 100.00,
        discount: "60%"
    },

];

const Product = () => {
    const productId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { totalItems, cartData, total, cartOpen } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const [productData, setProductData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await dispatch(fetchProductDetails(productId))
                console.log("data in product ", res?.data);
                setProductData(res?.data);
            }
            catch (error) {
                console.log("Get Product data Api error in Proudct page", error);
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log("product data prpeppdddddd", productData);

    // let productData = {};
    // product.forEach(element => {
    //     if (element._id == productId.productId) {
    //         productData = element
    //         // console.log("product id ", productId.productId);
    //     }
    // });


    const CartHandler = (product) => {
        dispatch(addToCart(product));
    };

    const total_amount = productData.Price;
    const closeCart = () => {
        dispatch(setCartClose());
    }

    const productIdsAndQuantity = [{ _id: productData._id, quantity: 1 }];
    const userId = user?._id;

    const handelpayment = async () => {
        // await BuyProduct(total_amount);

        if (!user) {
            closeCart();
            navigate("/signIn");
        }
        if (user.Address !== null) {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            const rate = data.rates.INR;
            console.log("rate : ", rate);

            const totalInINR = (total * rate).toFixed(2);
            console.log("totalInINR ", totalInINR);

            await BuyProduct(totalInINR, userId, productIdsAndQuantity, resetCart, navigate, dispatch);
        }
        else {
            closeCart();
            navigate("/CartCheckOut"); //664c6e3a62269f02a927205e
        }
    }



    return (
        <>
            <div className=' w-9/12 pt-28 mx-auto'>
                <div className=' flex '>
                    <div>
                        <img src={productData.ImageSrc} width={620} alt="product" />
                    </div>
                    <div className=' w-[70%] flex flex-col gap-6'>
                        <div>
                            <p className=' text-gray-500'>HOME / <a href="#">SILDENAFIL CITRATE</a> </p>
                            <h2 className=' text-3xl text-gray-900 font-semibold'>{productData.Name} </h2>
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

                            <p className=' text-xl text-gray-900 font-semibold'>${productData.cutprice} - ${productData.Price} </p>
                            {/* <button className=' bg-blue-600 p-2 rounded-md text-gray-200'>BUY NOW</button> */}
                            <div className=' flex gap-4'>
                                <div className=" w-24 rounded px-3 py-2 bg-blue-500 button" id="button-7" onClick={() => handelpayment()}>
                                    <div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
                                    <p>BUY NOW</p>
                                </div>
                                <div className=" w-32 rounded px-3 py-2 bg-gray-400 button" id="button-7" onClick={() => CartHandler(productData)}>
                                    <div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
                                    <p>ADD TO CART</p>
                                </div>
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
            {/* <Cart /> */}
        </>
    )
}

export default Product
