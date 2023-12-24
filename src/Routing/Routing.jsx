import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Product from '../Components/Product'
import ProductDetails from '../Components/ProductDetails'
import Cart from '../Components/Cart'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Product/>}/>
            <Route path='/Products' element={<Product/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
       {/*The routr path {path='/product/:id'} if you don't put[:] it does't work.Cause this pass the elment*/}
       {/*:id-->this id did make new page*/}

    </div>
  )
}

export default Routing