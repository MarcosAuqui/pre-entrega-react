import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Counter } from "../counter/Counter"


export const ItemDetails = ({product}) => {

  const { addToCart, getQuantityByID } = useContext(CartContext)   

  const onAdd = (quantity) => {

    addToCart(
      {
        ...product,
        quantity: quantity
      }
    )
    
  }

  const  quantity = getQuantityByID(product.id)

  return (
    <div className='containerItemDetails'>
      <div className="containerImg">
        <img src={product.img} alt="" />
      </div>
        <div className='containerDetails'>

           <h2>{product.title}</h2>
           <h2>{product.price}</h2>
           <h2>{product.description}</h2>
           
        </div>

        <Counter onAdd={onAdd} stock={product.stock} initial= {quantity}/>

    </div>
  )
}
