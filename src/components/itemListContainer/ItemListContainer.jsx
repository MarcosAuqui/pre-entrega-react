import "./ItemListContainer.css"

import { useState } from "react"

import {Products} from "../../data/Products.js"

import { useEffect } from "react"

 import { Counter } from "../counter/Counter"

import { ItemList } from "../itemList/ItemList"

import { useParams } from "react-router-dom"





export const ItemListContainer = ( {greeting} ) => {

  const {categoryName} = useParams()

  
  const [items, setItems] = useState( [] )

  // const [sePuedeEstarAca, setSePuedeEstarAca] =useState("")
 
  useEffect( () => {
    
    const productsFiltered = Products.filter(productos => productos.category === categoryName)


    const task = new Promise((resolve, reject) =>{

      setTimeout( () =>{
        resolve(categoryName ? productsFiltered : Products)
      },500)

      })
      task
      .then( (res) =>{ setItems( res ) })
      .catch( (err) =>{console.log("se rehazo")})
    
      console.log("SE HIZO LA PETICION")
      
  },[categoryName])
  console.log(items)

  return (
    <div className= "container-items-light">

     <ItemList items={items}/> 

      <Counter initial={1} stock={7}/>


    </div>
  )
}
