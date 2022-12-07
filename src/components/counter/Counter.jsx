import { useState } from 'react'
import { CustomButtom } from '../customButtom/CustomButtom'

export const Counter = () => {


    const [counter, setCounter] = useState(0)


  return (

    <div>

      <h2>{counter}</h2>

      <CustomButtom texto={"sumar"} counter={counter} setCounter={setCounter}/>
    </div>

  )
}
