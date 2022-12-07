// HOOK ---> estado = useState
// import {useState} from "react"

export const CustomButtom = ({texto, counter, setCounter}) => {

  // const miEstado = useState(0)
  // const counter = [0];
  // let setCounter = miEstado[1]


/* 
  const [counter, setCounter] = useState(0)



  const restar = () =>{
    setCounter(counter - 1)
  } */

  const sumar = () => {
    
    setCounter( counter+ + 1)
  }

  return (
    <div>
      <button onClick={sumar}>{texto}</button>
    </div>
  )
}
