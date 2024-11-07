import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removetoCart, deleteAll } from "../Redux/Slice/CartSlice";

const CartPage = () => {

    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems)
    const dispatch = useDispatch();

    return (
        <>

            <div className='m-2'>

                <h1 className='font-bold font-mono border text-2xl py-2 bg-cyan-50'>CartItems <span className='bg-cyan-300 rounded-md border border-black'>({cartItems.length})</span></h1>
                <button type="button" className='border m-2 rounded-md px-2 bg-teal-700 text-white' onClick={() => dispatch(deleteAll())}>Delete All</button>

                <ul className='flex flex-wrap justify-center' >

                    { cartItems && cartItems.map(product => (

                        <li key={product.id} className='border-black border rounded-lg m-2 h-68 w-56 p-2 flex flex-col justify-center items-center'>

                            <img src={product.image} alt={product.title} className='w-16 h-16 border border-black m-1 rounded-lg' />
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <p className='bg-gray-200 m-1 rounded-md px-2'>Quantity: {product.quantity}</p>
                            {/* <button className='border p-1 rounded-xl text-xs px-3 bg-indigo-500 text-white' onClick={() => dispatch(addtoCart(product))}>add to cart</button> */}
                            <button className='border p-1 rounded-xl text-xs px-3 bg-indigo-500 text-white' onClick={() => dispatch(removetoCart(product))}>remove to cart</button>
                        </li>

                    ))}
                </ul>

            </div>

        </>
    )
}

export default CartPage;