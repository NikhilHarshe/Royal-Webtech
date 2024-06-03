import React from 'react'
import { useForm } from 'react-hook-form';
import { updateUser } from "../services/opretions/userApi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCart, setCartOpen } from '../slices/cartSlice';
import { BuyProduct } from '../services/opretions/paymentApi';

const CartForm = () => {
    const { Token } = useSelector((state) => state.auth);
    const { cartData, total } = useSelector((state) => state.cart);
    // const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, e) => {
        const formData = getValues();
        // console.log("formData : ", data);
        const result = await dispatch(updateUser(formData, Token, navigate));
        // dispatch(setCartOpen());
        // console.log("Result in CartForm : ", result);
        const user = localStorage.getItem("user");
        console.log("user in side cart : ", user);

        const productIdsAndQuantity = cartData.map(cart => ({ _id: cart._id, quantity: cart.quantity }));
        const userId = user?._id;


        if (user.Address !== null) {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            const rate = data.rates.INR;
            console.log("rate : ", rate);

            const totalInINR = (total * rate).toFixed(2);
            console.log("totalInINR ", totalInINR);

            await BuyProduct(totalInINR, userId, productIdsAndQuantity, resetCart, navigate, dispatch);
        }

        e.target.reset();
    }
    return (

        <div className=' w-screen pt-24 pb-6'>
            <form action="" className=' flex flex-col gap-5 w-6/12 mx-auto'>
                {/* <div className=' flex justify-between gap-10'>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='FirstName'><span>First Name</span><sup className='text-pink-600'>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='FirstName' {...register("FirstName", { required: true })} />
                    </div>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='LastName'><span>Last Name</span><sup className='text-pink-600'>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='LastName' {...register("LastName", { required: true })} />
                    </div>
                </div> */}
                <div className=' w-full flex flex-col'>
                    <label htmlFor='Address'><span>Street Address</span><sup className='text-pink-600'>*</sup> </label>
                    <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Address' {...register("Address", { required: true })} />
                    {errors.Address && (
                        <span className="ml-2 text-xs tracking-wide text-pink-600">
                            Address is required
                        </span>
                    )}
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='County'><span>County <sup className='text-pink-600'>*</sup></span> </label>
                    <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='County' {...register("County", { required: true })} />
                    {errors.County && (
                        <span className="ml-2 text-xs tracking-wide text-pink-600">
                            County is required
                        </span>
                    )}
                </div>
                <div className=' flex justify-between gap-10'>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='Postcode'><span>Postcode</span><sup className='text-pink-600'>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Postcode' {...register("Postcode", { required: true })} />
                        {errors.Postcode && (
                            <span className="ml-2 text-xs tracking-wide text-pink-600">
                                Postcode is required
                            </span>
                        )}
                    </div>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='Phone'><span>Phone No. </span><sup className='text-pink-600'>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Phone' {...register("Phone", { required: true })} />
                        {errors.Phone && (
                            <span className="ml-2 text-xs tracking-wide text-pink-600">
                                Phone No. is required
                            </span>
                        )}
                    </div>
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='Email'><span>Email Address </span><sup className='text-pink-600'>*</sup> </label>
                    <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Email' {...register("Email", { required: true })} />
                    {errors.Email && (
                        <span className="ml-2 text-xs tracking-wide text-pink-600">
                            Email is required
                        </span>
                    )}
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='Notes'><span>Order notes (optional) </span> </label>
                    <textarea className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Notes' {...register("Notes")} />
                </div>

                <div className=' flex justify-center'>
                    <button onClick={handleSubmit(onSubmit)} className=' bg-blue-500 text-gray-100 font-semibold px-3 py-1 rounded'>
                        Buy Know
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CartForm
