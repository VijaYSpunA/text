import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import Product from './Product'

const Cart = () => {
    const [total,setTotal]=useState(0)
    //We have a hook to access the redux state
    const card_data=useSelector((state)=>state.productsData.cartData)
    // console.log(card_data)
  return (
    <div>
        <h2>cart page</h2>
        <p>total price:{total}</p>
        <div className='container mt-2 border border-box'>
            {
                card_data && card_data.length > 0 ?(
                  card_data.map((tan)=>{
                  return <div>
                     <img src={tan.image} alt='cartimg'/>
                     <p>{tan.title}</p>
                     
                     <button className='btn btn-warning'>Remove from cart</button>

                    </div>
                   

                  })  
                ):(<p>Please add to card</p>)
            }

        </div>

    </div>
  )
}

export default Cart