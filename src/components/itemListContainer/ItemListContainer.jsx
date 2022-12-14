import "./ItemListContainer.css"

import { useState } from "react"

import {Products} from "../../data/Products.js"

import { useEffect } from "react"

import { Counter } from "../counter/Counter"

import { ItemList } from "../itemList/ItemList"



export const ItemListContainer = ( {greeting} ) => {

  const [items, setItems] = useState( [] )



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
    <div className= "container-items-light">

      <Counter initial={1} stock={7}/>

      <ItemList items={items}/>

    </div>
  )
}
