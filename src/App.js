// src/App.js
import React from 'react';
import Products from './Components/Products';
import CartPage from './Components/CartPage';

const App = () => {
  return (
    <>
      <div className='bg-gray-400 w-full h-full content-center text-center'>

        <CartPage />

        <Products />
      </div>
    </>

  )
}

export default App;