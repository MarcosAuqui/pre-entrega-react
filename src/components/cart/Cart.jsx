import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import {Link} from "react-router-dom"

import { CartContext } from "../../context/CartContext"
import swal from "sweetalert"

import { ItemCart } from "../itemCart/ItemCart"
import {NoInfo} from "../noInfo/NoInfo"
import { Button  } from "@mui/material"
import { Form } from "../form/Form"

import { db } from "../../fireBaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"
import { Orders } from "../orders/Orders"





export const Cart = () => {

    const {cart, clearCart, getTotalPrice} = useContext(CartContext)

    const [buy, setBuy] = useState(false)

    const [orderID, setOrderID] = useState(null)

    const [order, setOrder] = useState({})


    const openForm = () => {
      if(cart.length > 0){
        setBuy(true)
      }else{
        alert("no hay productos para comprar.")
      }
      
    }

    
    useEffect( () => {
      

      if(orderID){
        const orderCollection = collection(db, "orders")
      const ref= doc( orderCollection, orderID )

      getDoc(ref) 
       .then( res => {
        setOrder({
          id: res.id,
          ...res.data()
        })
       })
      }
    },[order.id] )

    // console.log(order)

    // const [order, setOrder] = useState({})

    

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

    if(orderID){
      return <div>
        <h1>Tu orden de compra es: {orderID}</h1>
        <Orders order={order}/>
        <Link to={"/"}> <Button variant="contained">Volver a comprar</Button> </Link>
      </div>
    }
    
  return (

    <div className="cart-container">
      

      <div className="container-items">

      {cart.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}

        {cart.length < 1 && <NoInfo/>}


      </div>

      <div className="cart-info">

        {cart.length > 0 && <h2>Cart description </h2>}
        {cart.length > 0 && <h3>Cantidad de productos:</h3>}
        {cart.length > 0 && <h3>Precio total: {getTotalPrice() > 0 ? getTotalPrice() : 0}</h3>}
        
        
        {
          buy ? (
          <Form 
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId= {setOrderID}
            clearCart= {clearCart}
          />
          ) : ( 
            
            <div className="btn-cart">
              <Button variant="contained" onClick= { openForm } >
                Comprar
              </Button>
              <Button onClick={ () => clear()} variant="contained">
                Vaciar carrito
              </Button>
            </div>
           
         )}
      </div>
      
    </div>
  )
}