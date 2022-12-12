import "./ItemListContainer.css"

import { useState } from "react"

import {Products} from "../../data/Products.js"

import { useEffect } from "react"

import { ProductsCard } from "../productsCard/ProductsCard.jsx"



export const ItemListContainer = ( {greeting} ) => {
  
  const [isDark, setIsDark] = useState(false) 

  const [items, setItems] = useState( [] )



  const toggleMode = () =>{

    setIsDark(!isDark)

  }
  // console.log(isDark)

  useEffect( () => {
    
    const task = new Promise((resolve, reject) =>{

      setTimeout( () =>{
        resolve(Products)
      },2000)

      })
      task
      .then( (res) =>{ setItems( res ) })
      .catch( (err) =>{console.log("se rehazo")})
    
      console.log("SE HIZO LA PETICION")
      
  },[])
  console.log(items)

  return (
    <div className={isDark ? "container-items-dark" : "container-items-light"}>


        {/* <h1>{greeting}</h1>
        <button onClick={toggleMode}>{isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}</button>
         */}


        {
          items.map((element) =>{
            return (
            <ProductsCard key={element.id} element={element}/>
          );
          })
        }

    </div>
  )
}
