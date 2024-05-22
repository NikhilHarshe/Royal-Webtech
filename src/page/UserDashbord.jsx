import React, { useEffect } from 'react'
import { getUserDetails } from '../services/opretions/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const UserDashbord = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Token } = useSelector((state) => state.auth)

    const userData = async () => {
        const res = await getUserDetails(Token);
        dispatch(setUser(res));
    }

    useEffect(() => {
        userData()
    }, []);

    const { user } = useSelector((state) => state.user);
    console.log("user Data in Dashbord", user);

    const productData = user?.Products
    console.log("ProductData : ", productData);

    if(productData.length === 0){
        console.log("Product data not found ")
        return (
            <>
                <div className=' pt-24 h-[74vh] flex justify-center items-center '>
                    <h2 className='text-3xl italic font-semibold capitalize'>Your purchase history is empty at the moment.</h2>
                </div>
            </>
        )
    }


    return (
        <>
            <div className=' pt-24 w-9/12 mx-auto'>
                {
                    productData.map((data) => (
                        <div className='flex justify-between border p-5'>
                            <div className=' flex gap-24'>
                                <div>
                                    <img src={data.product.ImageSrc} alt="" width={200} />
                                </div>
                                <div className=' pt-9'>
                                    {/* {data.quantity} */}
                                    <p>Name : <span className='  font-semibold'>{data.product.Name}</span> </p>
                                    <p>Des: <span className='  font-semibold'>{data.product.des}</span> </p>
                                    {/* <p>Max Discount : {data.product.discount} </p> */}
                                    <p>Qut: <span className='  font-semibold'>{data.quantity}</span></p>
                                </div>
                            </div>
                            <div className=' flex justify-center align-middle my-auto'>
                                <button className=' border border-solid border-blue-700 rounded-md h-9 px-4 bg-blue-500 hover:bg-blue-600 text-white' onClick={() => navigate(`/invoice/${data._id}`)}>Downlod Invoice</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UserDashbord
