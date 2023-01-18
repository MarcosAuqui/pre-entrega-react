import { Button } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const ItemCart = ( { item } ) => {

  const {deleteProductById} = useContext(CartContext)
    
  return (
    <div key={item.id} className="cart-item">

        <img src= {item.img} alt="" />

        <div className="cart-item-info">

            <h2>{item.title}</h2>
            <h2>${item.price}</h2>
            <h2>Cantidad: {item.quantity}</h2>

        </div>
        <Button variant="contained" onClick={() => deleteProductById(item.id  )}>Quitar</Button>
        
    </div>
  )
}
