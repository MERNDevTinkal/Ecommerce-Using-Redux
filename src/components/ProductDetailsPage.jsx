import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../features/productDetailsSlice";
import { addToCart, removeFromCart } from "../features/cartSlice";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { productDetails, loading, error } = useSelector((state) => state.productDetails);
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        const savedProduct = localStorage.getItem(`product_${id}`);
        if (savedProduct) {
            dispatch({ type: "productDetails/fetchProductDetails/fulfilled", payload: JSON.parse(savedProduct) });
        } else {
            dispatch(fetchProductDetails(id));
        }
    }, [dispatch, id]);

    if (loading) return <div className=" text-lg text-green-500 ">Loading...</div>;
    if (error) return <div className="text-center text-lg text-red-500">{error}</div>;
    if (!productDetails) return <div className="text-center text-lg">Product not found</div>;

    return (
        <div className="p-1 mr-22 flex justify-center">
            <div className="w-[100%] flex gap-1 shadow-lg pt-6 rounded-lg">
                {/* Product Image */}
                <div className="w-1/2 flex flex-col items-center justify-center pr-2">
                    <img 
                        src={productDetails.image} 
                        alt={productDetails.title} 
                        className="w-600 h-[650px] object-contain bg-white p-1 mr-30 rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4 mr-44">{productDetails.title}</h2>
                    <p className="text-xl text-gray-500 mb-3">{productDetails.category}</p>
                    <p className="text-3xl font-semibold text-blue-600 mb-4">${productDetails.price}</p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{productDetails.description}</p>
                    
                    {/* Cart Button */}
                    <div>
                        <button
                            className={`px-8 py-3 rounded text-white text-lg font-semibold 
                                ${cartItems[productDetails.id] ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
                            onClick={() => {
                                if (cartItems[productDetails.id]) {
                                    dispatch(removeFromCart(productDetails.id));
                                } else {
                                    dispatch(addToCart(productDetails));
                                }
                            }}
                        >
                            {cartItems[productDetails.id] ? "Remove From Cart" : "Add To Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
