import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Counter } from "../counter/Counter"


export const ItemDetails = ({product}) => {

  const { addToCart } = useContext(CartContext)   

  const onAdd = (quantity) => {

    addToCart(
      {
        ...product,
        quantity: quantity
      }
    )

  }


  return (
    <div>
        <div>
           <h2>{product.title}</h2>
           <h2>{product.price}</h2>
           <h2>{product.description}</h2>
           
           
        </div>

        <Counter onAdd={onAdd} stock={product.stock}/>

    </div>
  )
}
