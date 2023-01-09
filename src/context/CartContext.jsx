import { useState } from "react"
import { createContext } from "react"
 
export const CartContext = createContext()


export const CartContextProvider = ({children}) => {

    /* const [cart, setCart] = useState([])

    const addToCart = () =>{
        setCart()
    }

    const data = {

        cart,
        setCart,
        addToCart
 
    } */

  return (
    <CartContext.Provider >
        {children}
    </CartContext.Provider>
  )
}
