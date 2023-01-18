import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import swal from "sweetalert"
import { ItemCart } from "../itemCart/ItemCart"
import {NoInfo} from "../noInfo/NoInfo"


export const Cart = () => {

    const {cart, clearCart, getTotalPrice} = useContext(CartContext)

    const clear = () => {

      swal({
        title: "Seguro quieres borrar todo el carrito?",
        text: "Una vez que lo hagas no podras recuperar la informacion!",
        icon: "warning",
        buttons: ["no", "si"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Carrito borrado con exito!", {
            icon: "success",
          })
          clearCart()
        } else {
          swal("Cancelaste la operacion")
        }
      })


    }


    // if(cart.length < 1){
    //   return <h2>no hay elementos</h2>
    // }

    // console.log(cart)
  return (
    <div className="cart-container">

      <div className="container-items">

      {cart.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}

        {cart.length < 1 && <NoInfo/>}


      </div>

      <div className="cart-info">

        <h2>Cart description </h2>
        <h3>Cantidad de productos:</h3>
        <h3>Precio total: {getTotalPrice() > 0 ? getTotalPrice() : 0}</h3>
        

      </div>

      <div className="cart-btn">
        <button onClick={ () => clear() }>Limpiar carrito</button>
      </div>

    </div>
  )
}