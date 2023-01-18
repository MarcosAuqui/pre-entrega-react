import { useState } from "react"
import { createContext } from "react"
 
export const CartContext = createContext()


export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState( [] )

  const isInCart = (item => {

    return cart.some(elemento => elemento.id === item.id) 

  })



  const addToCart = (elemento) =>{

  
    if(isInCart(elemento)){

      let newArray = cart.map( product =>{

        if(product.id === elemento.id){

          let newProduct = {

            ...product,
            quantity: elemento.quantity

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

  const getQuantityByID = ( id ) => {

    const product = cart.find(elemento => elemento.id === id)

  return product?.quantity

  }

  const getTotalPrice = () =>{

    const total = cart.reduce( (acc, element) => {
      
      return acc + (element.price * element.quantity)

    }, 0)

    return total
   // otra solucion 
    /* let acc = 0
    for ( let i = 0 < cart.length; i++)
    acc = acc + (cart[i].price) * cart[i].quantity
     return acc
   */

  }



  const data = { 

    cart,
    addToCart,
    clearCart,
    getQuantityByID,
    getTotalPrice, 
  }

  

  return (
    <CartContext.Provider value={ data } >
        {children}
    </CartContext.Provider>
  )
}
