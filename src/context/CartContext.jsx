import { useState } from "react"
import { createContext } from "react"
 
export const CartContext = createContext()


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const data = {
    cart,
    setCart,
  }


  return (
    <CartContext.Provider value={ data } >
        {children}
    </CartContext.Provider>
  )
}
