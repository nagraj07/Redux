import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/Slice/CartSlice';

const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }, []);

    return (
        <div className='m-2'>

            <h1 className='font-bold font-mono border py-2 text-2xl bg-cyan-50'>Products</h1>

            <ul className='flex flex-wrap justify-center'>

                {products.map(product => (
                
                    <li key={product.id} className='border-black border rounded-lg m-2 h-68 w-56 p-2 flex flex-col justify-center items-center'>
                        
                        <img src={product.image} alt={product.title} className='w-16 h-16 border border-black rounded-lg' />
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <button className='border p-1 rounded-xl text-xs px-3 bg-indigo-500 text-white' onClick={() => dispatch(addtoCart(product))}>add to cart</button>
                        {/* <button className='border p-1 rounded-xl text-xs px-3 bg-indigo-500 text-white' onClick={() => dispatch(removetoCart(product))}>remove to cart</button> */}
                    </li>

                ))}
            </ul>

        </div>
    );
}

export default Products;
