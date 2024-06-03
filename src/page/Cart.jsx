import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQuantity, removeFromCart, resetCart, setCartClose } from '../slices/cartSlice'
import { BuyProduct } from "../services/opretions/paymentApi"
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  // const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalItems, cartData, total, cartOpen } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  console.log("CartData : ", cartData);

  // const [idsAndQuantity, setIdsAndQuantity] = useState([])
  const productIdsAndQuantity = cartData.map(cart => ({ _id: cart._id, quantity: cart.quantity }));
  const userId = user?._id;
  // console.log("productIdsAndQuantity : ", productIdsAndQuantity);
  // console.log("UserId : ", userId);
  // setIdsAndQuantity(productIdsAndQuantity);

  const closeCart = () => {
    dispatch(setCartClose());
    // console.log("cartData total price : ", total);
    // console.log("cartData", cartData);
    // console.log("User : ", user);
  }

  const CheckOutHandler = async () => {
    // console.log("CheckOut cliked ", total);
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
      navigate("/CartCheckOut");
    }
    // dispatch(removeFromCart(product));
    // dispatch(resetCart());
  }

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => dispatch(setCartClose)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => closeCart()}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartData.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.ImageSrc}
                                    alt="ProductImage"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.Name}</a>
                                      </h3>
                                      <p className="ml-4">${product.Price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.Color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className=' flex gap-3'>
                                      <p className=' bg-blue-600 px-1 text-center hover:bg-blue-700 cursor-pointer select-none text-gray-100 font-bold' onClick={() => dispatch(addToCart(product))}>+</p>
                                      <p className="text-gray-500">Qty {product.quantity}</p>
                                      <p className=' bg-blue-600 px-1 text-center hover:bg-blue-700 cursor-pointer select-none text-gray-100 font-bold' onClick={() => dispatch(decreaseQuantity(product))}>-</p>
                                    </div>


                                    <div className="flex">
                                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => dispatch(removeFromCart(product))}>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${total}.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <div
                          onClick={CheckOutHandler}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer"
                        >
                          Checkout
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => closeCart()}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
