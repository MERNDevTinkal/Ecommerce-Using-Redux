import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../features/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const cartTotal = Object.values(cartItems).reduce((total, product) => total + product.quantity * product.price, 0);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mt-10 mb-5">Cart</h1>

            <div className="flex flex-col gap-2 ml-12 mt-2">
                {Object.values(cartItems).length > 0 ? (
                    Object.values(cartItems).map((product) => {
                        const totalPriceForEachProduct = product.quantity * product.price;

                        return (
                            <div key={product.id} className="flex flex-row items-center gap-20 p-6 w-full h-50">
                                <img src={product.image} alt={product.title} className="w-35 h-35" />

                                <div className="flex flex-col pl-30 w-160">
                                    <h2 className="text-lg font-semibold w-85">{product.title}</h2>
                                    <h3 className="text-gray-600">Price: ${product.price}</h3>

                                    <div className="flex mt-2 items-center gap-3">
                                        <button onClick={() => dispatch(decrementQuantity(product.id))}
                                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer hover:text-blue-700">
                                            <RiSubtractLine />
                                        </button>

                                        <h1 className="text-lg font-semibold">{product.quantity}</h1>

                                        <button onClick={() => dispatch(incrementQuantity(product.id))}
                                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer hover:text-green-700">
                                            <IoMdAdd />
                                        </button>

                                        <button className="p-2 w-10 cursor-pointer hover:text-red-500"
                                            onClick={() => dispatch(removeFromCart(product.id))}>
                                            <FaTrash className="text-xl" />
                                        </button>

                                        <h1 className="ml-65 text-lg font-semibold">
                                            Total: ${totalPriceForEachProduct.toFixed(2)}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <p className="text-center text-gray-500 text-xl">Your cart is empty 🛍️</p>
                    </div>
                )}
            </div>

            <h1 className="text-xl font-bold mt-10 mb-5">
                Cart Total: ${cartTotal.toFixed(2)}
            </h1>
        </div>
    );
};

export default Cart;
