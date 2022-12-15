import { useState } from "react"
import { useEffect } from "react"
import { Products } from "../../data/Products"
import { useParams } from "react-router-dom"

export const ItemDetailsContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})

  useEffect( () => {

    const productSelected = Products.find( producto => producto.id === +id ) /* o producto.id === +id  o parseInt(id)*/
    setProduct(productSelected)
  }, [id])

  console.log(product)


  return (
    <div>
        <h2>{product.title}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}
