// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// // npm install react-to-print (please install)
// import { useReactToPrint } from "react-to-print";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../slices/userSlice";
// import { getUserDetails } from "../services/opretions/userApi";

// function Invoice() {

//     const { productId } = useParams();
//     // console.log("Product Id : ", productId);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { Token } = useSelector((state) => state.auth)
//     const { user } = useSelector((state) => state.user);

//     useEffect(() => {
//         if (!user) {
//             // Fetch user details if not already present
//             dispatch(getUserDetails(Token, navigate));
//         }
//     }, [dispatch, Token, navigate, user]);

//     // const userData = async () => {
//     //     const res = await dispatch(getUserDetails(Token));
//     //     // dispatch(setUser(res));
//     //     console.log("res in invoice ", res);
//     // }

//     // useEffect(() => {
//     //     userData()
//     // }, []);

//     // const { user } = useSelector((state) => state.user);
//     console.log("user Data in Invoice", user);

//     const productData = user?.Products
//     console.log("Invoice : ", productData);

//     // if(productData.product?._id === productId){
//     //     console.log("Product Invoice data fetched : ", productData.product);
//     // }
//     let productD = "";
//     productData.forEach(element => {
//         if (element._id === productId) {
//             console.log("Product Invoice data fetched : ", element);
//             productD = element;
//         }
//     });

//     const { quantity, product, purchesDate } = productD
//     const conponentPDF = useRef();

//     const generatePDF = useReactToPrint({
//         content: () => conponentPDF.current,
//         documentTitle: "Userdata",
//         // onAfterPrint: () => alert("Data saved in PDF")
//     });

//     return (
//         <React.Fragment>
//             <div className=" pt-16 relative">
                    
//                         <div ref={conponentPDF} >
//                             <div className=" m-14 ">
//                                 <div className=" max-w-4xl mx-auto p-4 border border-gray-300">
//                                     <header className="flex justify-between border-b border-gray-300 pb-4 mb-4">
//                                         <div>
//                                             <h1 className="text-2xl font-bold">Blue Pills</h1>
//                                             <address className="not-italic mt-2">
//                                                 Shop no. 1, Mallika Apartment, Ring Road, NIT Lay out, <br />
//                                                 Bhamati Parsodi Chowk, Nagpur, Nagpur, Maharashtra,
//                                                 440022
//                                             </address>
//                                         </div>
//                                         <div className="text-right">
//                                             <h2 className="text-xl font-semibold">INVOICE</h2>
//                                             <p><strong>Invoice #:</strong> IN-001</p>
//                                             <p className=" w-72"><strong>Invoice Date:</strong> {purchesDate.slice(0,10)}</p>
//                                             {/* <p className=" w-72"><strong>Invoice Date:</strong> {purchesDate}</p> */}
//                                             {/* <p><strong>P.O.#:</strong> 2430/2019</p> */}
//                                             {/* <p><strong>Due Date:</strong> 26/04/2019</p> */}
//                                         </div>
//                                     </header>
//                                     <section className="flex justify-between mb-4">
//                                         <div>
//                                             <h3 className="font-semibold">Bill To</h3>
//                                             <address className="not-italic w-52">
//                                                 {user?.FullName}
//                                                 <br />
//                                                 {user?.Address}
//                                             </address>
//                                         </div>
//                                         <div>
//                                             <h3 className="font-semibold">Ship To</h3>
//                                             <address className="not-italic w-40">
//                                                 {user?.Address}
//                                             </address>
//                                         </div>
//                                     </section>
//                                     <section>
//                                         <table className="min-w-full divide-y divide-gray-200 mb-4">
//                                             <thead className="bg-gray-50">
//                                                 <tr>
//                                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QTY</th>
//                                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIPTION</th>
//                                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UNIT PRICE</th>
//                                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody className="bg-white divide-y divide-gray-200">
//                                                 <tr>
//                                                     <td className="px-6 py-4 whitespace-nowrap">{quantity}</td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">{product.Name}</td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">{product.Price}</td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">{product.Price * quantity}</td>
//                                                 </tr>
//                                             </tbody>
//                                             <tfoot>
//                                                 <tr>
//                                                     <td colSpan="3" className="px-6 py-4 text-right">Subtotal</td>
//                                                     <td className="px-6 py-4">{product.Price * quantity}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td colSpan="3" className="px-6 py-4 text-right">GST 12.0%</td>
//                                                     <td className="px-6 py-4">{((product.Price * quantity) * 0.12).toFixed(3).slice(0, -1)}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td colSpan="3" className="px-6 py-4 text-right font-bold">TOTAL</td>
//                                                     <td className="px-6 py-4 font-bold">{(product.Price * quantity) + ((product.Price * quantity) * 0.12)}</td>
//                                                 </tr>
//                                             </tfoot>
//                                         </table>
//                                     </section>
//                                     <section className="border-t border-gray-300 pt-4 text-center">
//                                         Thank you for choosing Blue Pills! If you have any questions or need assistance, please don't hesitate to contact us. We're here to help!
//                                         <p className="italic text-2xl mt-4">Blue Pills</p>
//                                     </section>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className=" absolute left-[70%] bottom-[-6%]">
//                             <button className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold" onClick={generatePDF}>Download Invoice</button>
//                         </div>
                    
//                 </div>
            
//         </React.Fragment>
//     );
// }
// export default Invoice;




import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../services/opretions/userApi";

function Invoice() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Token } = useSelector((state) => state.auth);
    const { user, loading, error } = useSelector((state) => state.user);

    const componentPDF = useRef();

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "Invoice",
    });

    useEffect(() => {
        if (!user) {
            // Fetch user details if not already present
            dispatch(getUserDetails(Token, navigate));
        }
    }, [dispatch, Token, navigate, user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading user data: {error}</div>;
    }

    if (!user) {
        return <div>No user data available.</div>;
    }

    const productData = user.Products || [];
    const productD = productData.find((element) => element._id === productId);

    if (!productD) {
        return <div>Product not found.</div>;
    }

    const { quantity, product, purchesDate } = productD;

    return (
        <React.Fragment>
            <div className="pt-16 relative">
                <div ref={componentPDF}>
                    <div className="m-14">
                        <div className="max-w-4xl mx-auto p-4 border border-gray-300">
                            <header className="flex justify-between border-b border-gray-300 pb-4 mb-4">
                                <div>
                                    <h1 className="text-2xl font-bold">Blue Pills</h1>
                                    <address className="not-italic mt-2">
                                        Shop no. 1, Mallika Apartment, Ring Road, NIT Lay out, <br />
                                        Bhamati Parsodi Chowk, Nagpur, Nagpur, Maharashtra,
                                        440022
                                    </address>
                                </div>
                                <div className="text-right">
                                    <h2 className="text-xl font-semibold">INVOICE</h2>
                                    <p><strong>Invoice #:</strong> IN-001</p>
                                    <p className="w-72"><strong>Invoice Date:</strong> {purchesDate.slice(0, 10)}</p>
                                </div>
                            </header>
                            <section className="flex justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold">Bill To</h3>
                                    <address className="not-italic w-52">
                                        {user.FullName}
                                        <br />
                                        {user.Address}
                                    </address>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Ship To</h3>
                                    <address className="not-italic w-40">
                                        {user.Address}
                                    </address>
                                </div>
                            </section>
                            <section>
                                <table className="min-w-full divide-y divide-gray-200 mb-4">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QTY</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIPTION</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UNIT PRICE</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">{quantity}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{product.Name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{product.Price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{product.Price * quantity}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="3" className="px-6 py-4 text-right">Subtotal</td>
                                            <td className="px-6 py-4">{product.Price * quantity}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="px-6 py-4 text-right">GST 12.0%</td>
                                            <td className="px-6 py-4">{((product.Price * quantity) * 0.12).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" className="px-6 py-4 text-right font-bold">TOTAL</td>
                                            <td className="px-6 py-4 font-bold">{(product.Price * quantity * 1.12).toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </section>
                            <section className="border-t border-gray-300 pt-4 text-center">
                                Thank you for choosing Blue Pills! If you have any questions or need assistance, please don't hesitate to contact us. We're here to help!
                                <p className="italic text-2xl mt-4">Blue Pills</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[70%] bottom-[-6%]">
                    <button className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold" onClick={generatePDF}>Download Invoice</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Invoice;


