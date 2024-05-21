import React, { useEffect } from 'react'
import { getUserDetails } from '../services/opretions/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../slices/userSlice';

const UserDashbord = () => {
    const dispatch = useDispatch();
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
                                <button className=' border border-solid border-blue-700 rounded-md h-9 px-4 bg-blue-500 hover:bg-blue-600 text-white'>Downlod Invoice</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UserDashbord
