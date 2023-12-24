import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
const Product = () => {
    const[product,setProduct]=useState([])

    useEffect(()=>{
        getProductData()
    },[])


    const getProductData=async()=>{
        const response=await fetch(`https://fakestoreapi.com/products`)
        const data=await response.json()
        setProduct(data)

    }
  return (
    <div>
      <div className='container '>
    {
        product.length > 0 ? (
            product.map((item)=>{
                return <div className='cont col-2' >
                  <Link to={`/product/${item.id}`}>
                        <div key={item.id} className='card col'>
                        <img src={item.image}  className='image'alt='img'/>
                        <div className='cart-body'>
                            <h4 className='cart-title'>{item.category}</h4>
                        </div>
                        </div>
                        </Link>
                </div>
            })
        )
    :   <p>Loading....</p>
        }
      </div>
</div>
  )
}

export default Product