import React, { useEffect, useState } from 'react'
import { products } from '../../data/products'
import { useParams } from "react-router-dom"
import { ItemDetails } from '../itemDetails/ItemDetails'



export const ItemDetailsContainer = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()

  useEffect( ()=>{
    const productSelected = products.find ( producto => producto.id === +id )
    setProduct(productSelected)
  }, [id])

  return (
    <div>
      <ItemDetails product= {product}/>
    </div>
  )
}
