import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

    const {cart, clearCart} = useContext(CartContext)

    // console.log(cart)
  return (
    <div>
      {
        cart.map( item => ( 
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.price}</h2>
            <h2>{item.description}</h2>
            <h2>Usted va a llevar {item.quantity} unidades</h2>
          </div>
        ))
      }

      <div>
        <button onClick={ () => clearCart() }>Limpiar carrito</button>
      </div>

    </div>
  )
}