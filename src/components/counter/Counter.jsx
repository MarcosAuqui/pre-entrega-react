import { useState } from 'react'


export const Counter = ({stock, initial = 1}) => {

  const [counter, setCounter] = useState(initial)

  const increment = ()=>{
    /* if (counter < initial){
      setCounter(counter + 1)

    } */
    counter < stock && setCounter(counter +1)
    
  }

  const decrement = ()=>{
    /* if (counter > initial){
      setCounter(counter - 1)
    } */
    counter > initial && setCounter(counter - 1)
  }

  const onAdd= (quantity) => {
    console.log("la cantidad es", quantity)
  }


  return (

    <div>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>

  )
}
