import React from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="fixed top-0 left-0 w-full bg-gray-100 shadow-md p-6 flex justify-between items-center z-50">
            <div className="text-3xl font-bold text-gray-800">Ecommerce</div>

            <div className="space-x-6 hidden md:flex">
                <Link to="/" className="px-4 py-2 text-gray-700 font-semibold cursor-pointer hover:text-blue-500 transition">
                    Home
                </Link>

                <Link to="/about" className="px-4 py-2 text-gray-700 font-semibold cursor-pointer hover:text-blue-500 transition">
                    About
                </Link>

                <Link
                    to="/cart"
                    className="flex items-center px-4 py-2 text-gray-700 font-semibold cursor-pointer hover:text-blue-500 transition relative"
                >
                    Cart
                    <IoMdCart className="text-2xl ml-2" />
                    {cartCount > 0 && (
                        <span className="absolute -top- -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Header;
