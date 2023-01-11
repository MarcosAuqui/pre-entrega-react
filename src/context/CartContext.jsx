import { useState } from "react"
import { createContext } from "react"
 
export const CartContext = createContext()


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState( [] )

  const addToCart = (elemento) =>{

    const isInCart = (item => {

      return cart.some(elemento => elemento.id === item.id) 

    })

    if(isInCart(elemento)){

      let newArray = cart.map( product =>{

        if(product.id === elemento.id){

          let newProduct = {

            ...product,
            quantity: product.quantity + elemento.quantity

          }
          return newProduct
        }else{
          return product
        }
        
      })

      setCart(newArray)

    }else{

      setCart( [...cart, elemento] )

    }

    

  }

  const clearCart = () => {

    setCart([])

  }

  const data = { 

    cart,
    addToCart,
    clearCart,
  }


  return (
    <CartContext.Provider value={ data } >
        {children}
    </CartContext.Provider>
  )
}
