import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../services/opretions/userApi';
import { setUser } from '../slices/userSlice';

const UserDashbord = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.user);
    const { Token } = useSelector((state) => state.auth); // Assuming you have auth state containing token

    // useEffect(() => {
    //     if (!user) {
    //         // Fetch user details if not already present
    //         console.log("useEffect dashbord call");
    //         dispatch(getUserDetails(Token, navigate));
    //     }
    // }, [dispatch, Token, navigate, user]);

    console.log("user in dashbord ", user);

    const productData = user?.Products || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (productData.length === 0) {
        return (
            <div className='pt-24 h-[74vh] flex justify-center items-center'>
                <h2 className='text-3xl italic font-semibold capitalize'>
                    Your purchase history is empty at the moment.
                </h2>
            </div>
        );
    }

    return (
        <div className='pt-24 w-9/12 mx-auto'>
            {productData.map((data) => (
                <div className='flex justify-between border p-5' key={data._id}>
                    <div className='flex gap-24'>
                        <div>
                            <img src={data.product.ImageSrc} alt="" width={200} />
                        </div>
                        <div className='pt-9'>
                            <p>Name: <span className='font-semibold'>{data.product.Name}</span></p>
                            <p>Des: <span className='font-semibold'>{data.product.des}</span></p>
                            <p>Qut: <span className='font-semibold'>{data.quantity}</span></p>
                        </div>
                    </div>
                    <div className='flex justify-center align-middle my-auto'>
                        <button
                            className='border border-solid border-blue-700 rounded-md h-9 px-4 bg-blue-500 hover:bg-blue-600 text-white'
                            onClick={() => navigate(`/invoice/${data._id}`)}
                        >
                            Download Invoice
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserDashbord;
