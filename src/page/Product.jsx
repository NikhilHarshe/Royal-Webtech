import React, { useEffect, useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { BuyProduct } from '../services/opretions/paymentApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetCart, setCartClose } from '../slices/cartSlice';
import { fetchProductDetails } from '../services/opretions/product';

const currencySymbols = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    INR: '₹',
};

const Product = () => {
    const productId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { totalItems, cartData, total, cartOpen } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const [productData, setProductData] = useState({});
    const [currency, setCurrency] = useState('USD');
    const [newCutprice, setNewCutprice] = useState('');
    const [newPrice, setNewPrice] = useState('');

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

    useEffect(() => {
        if (currency && productData.Price) {
            currencyConverter(currency, productData?.cutprice, setNewCutprice);
            currencyConverter(currency, productData?.Price, setNewPrice);
            localStorage.setItem("Currency", currency);
        }
    }, [currency, productData]);

    const currencyConverter = async (selectedCurrency, amount, setAmount) => {
        try {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            const rate = data.rates[selectedCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            setAmount(convertedAmount);
        } catch (error) {
            console.error('Error fetching exchange rate: ', error);
        }
    };

    const CartHandler = (product) => {
        dispatch(addToCart(product));
    };

    const closeCart = () => {
        dispatch(setCartClose());
    };

    const handelpayment = async () => {
        if (!user) {
            closeCart();
            navigate('/signIn');
            return;
        }
        if (user.Address) {
            // const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            // const data = await response.json();
            // const rate = data.rates.INR;
            // const totalInINR = (total * rate).toFixed(2);

            await BuyProduct(newPrice, currency, user._id, [{ _id: productData._id, quantity: 1 }], resetCart, navigate, dispatch);
        } else {
            closeCart();
            navigate('/CartCheckOut');
        }
    };

    if (!productData.Name) {
        return <div>Loading...</div>; // Or any loading indicator
    }

    return (
        <div className='w-9/12 pt-28 mx-auto'>
            <div className='flex'>
                <div>
                    <img src={productData.ImageSrc} width={620} alt='product' />
                </div>
                <div className='w-[70%] flex flex-col gap-6'>
                    <div>
                        <p className='text-gray-500'>
                            HOME / <a href='#'>SILDENAFIL CITRATE</a>{' '}
                        </p>
                        <h2 className='text-3xl text-gray-900 font-semibold'>{productData.Name} </h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='text-yellow-500 flex'>
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                                <TiStarFullOutline size={25} />
                            </div>
                            {productData.review}
                        </div>

                        <div className=' flex flex-col gap-3'>
                            <select className=' w-[8.2rem] border-2 border-gray-400 active:border-blue-500  px-2 py-1 rounded-md ' value={currency} onChange={(e) => setCurrency(e.target.value)} name='currency' id=''>
                                {/* <option value='' disabled>
                                    Select Currency
                                </option> */}
                                <option value='USD'>Dollar</option>
                                <option value='GBP'>Pound</option>
                                <option value='EUR'>Euro</option>
                                <option value='INR'>Indian Rupee</option>
                            </select>
                            <p className='text-xl text-gray-900 font-semibold'>
                                {currencySymbols[currency]} {newCutprice} - {currencySymbols[currency]} {newPrice}
                            </p>
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-24 rounded px-3 py-2 bg-blue-500 button' id='button-7' onClick={handelpayment}>
                                <div id='dub-arrow'>
                                    <img src='https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true' alt='' />
                                </div>
                                <p>BUY NOW</p>
                            </div>
                            <div className='w-32 rounded px-3 py-2 bg-gray-400 button' id='button-7' onClick={() => CartHandler(productData)}>
                                <div id='dub-arrow'>
                                    <img src='https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true' alt='' />
                                </div>
                                <p>ADD TO CART</p>
                            </div>
                        </div>
                    </div>

                    <div className='ml-5'>
                        <ul className='list-disc flex flex-col gap-2'>
                            <li>
                                <span className='text-gray-900 font-semibold'>Manufacturer</span> : {productData.Manufacturer}{' '}
                            </li>
                            <li>
                                <span className='text-gray-900 font-semibold'>Composition</span> : {productData.Composition}{' '}
                            </li>
                            <li>
                                <span className='text-gray-900 font-semibold'>Form</span> : {productData.Form}{' '}
                            </li>
                            <li>
                                <span className='text-gray-900 font-semibold'>Packaging</span> : {productData.Packaging}
                            </li>
                            <li>
                                <span className='text-gray-900 font-semibold'>Shelf life</span> : {productData.Shelf_life}
                            </li>
                            <li>
                                <span className='text-gray-900 font-semibold'>Usages</span> : {productData.Usages}
                            </li>
                        </ul>
                    </div>

                    <div className='flex gap-3 text-xs flex-col'>
                        <p>SKU: N/A</p>
                        <p>
                            <span>Category : </span> <a href='#' className='text-blue-600'>{productData.Category}</a>{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
