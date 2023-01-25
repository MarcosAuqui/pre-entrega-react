import { useEffect, useState } from 'react'


export const Counter = ({stock, initial = 0 , onAdd}) => {

  const [counter, setCounter] = useState(initial)

  useEffect( () => {
    setCounter(initial)
  }, [initial])

  const increment = ()=>{

    counter < stock && setCounter(counter +1)
    
  }

  const decrement = ()=>{

    counter > 1 && setCounter(counter - 1)

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
