import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addtocart } from './Redux/ProductActions'
import { useDispatch } from 'react-redux'
const ProductDetails = () => {
    const[product,setProduct]=useState({})
    const {id}=useParams()
    const dispatch=useDispatch()
    // console.log(id)
    //you would see one object ANd one more thing id is a just name you can change
    //if you destructute the id you can see only id value {product/id-->this is the id}
  
  
  
    const getProducts=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`);
     setProduct(data)
    // console.log(res)
    //we have done already so don't need
   }
   useEffect(()=>{
    getProducts()
})
   
    //array.length
    //for object-object.keys()
    return (
      
    <div>
        <h2>ProductDetails Page</h2>
        {
            Object.keys(product).length > 0 ? (
               <div className='row border container'>
                <div className='col-md-6 p-5 mt-2 '>
                    <img src={product.image} className="img-fluid"alt='imag-product details'/>
                   
                   </div>
                   <div className='col-md-6 border'>
                    <div className='mt-2'>
                        <h3 className='text-center'>
                            {product.title}
                        </h3>
                    </div>
                    <button className='btn btn-info'
                    onClick={()=>{
                     dispatch(addtocart(product))    
                        // console.log( addtocart(product))
                    }
                        }>Add to cart</button>
                   </div>

               </div>

            ):<p>Loading...</p>
        }
    </div>
  )
}

export default ProductDetails