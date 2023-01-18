import "./ItemListContainer.css"

import { useState } from "react"

import { useEffect } from "react"

import { ItemList } from "../itemList/ItemList"

import { useParams } from "react-router-dom"

import PacmanLoader from "react-spinners/PacmanLoader";

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../fireBaseConfig"




export const ItemListContainer = ( {greeting} ) => {

  const {categoryName} = useParams()

  const [items, setItems] = useState( [] )

  const [isLoading, setIsLoading] = useState(false)
  console.log(categoryName)

  

  // const [sePuedeEstarAca, setSePuedeEstarAca] =useState("")
 
  useEffect( () => {

    // setIsLoading(true)
    
    // const productsFiltered = products.filter(productos => productos.category === categoryName)


    // const task = new Promise((resolve, reject) =>{

    //   setTimeout( () =>{
    //     resolve(categoryName ? productsFiltered : products)
    //   },500)

    //   })
    //   task
    //   .then( (res) =>{ setItems( res ) })
    //   .catch( (err) =>{console.log("se rehazo")})
    
    //   console.log("SE HIZO LA PETICION")


    const itemCollection = collection( db, "pructs" )

    if(categoryName){
      const q = query(itemCollection, where( "category", "==", categoryName ))
      getDocs(q)
     .then((res) => {
      const products = res.docs.map( product => { //[{}, {}]
        return{
          ...product.data(),
          id: product.id
        }
      })
      setItems(products)
    }) 
    .catch ((err) => console.log(err))

    }else{
      getDocs(itemCollection)
     .then((res) => {
      const products = res.docs.map( product => { //[{}, {}]
        return{
          ...product.data(),
          id: product.id
        }
      })
      setItems(products)
    }) 
    .catch ((err) => console.log(err))

    }

    
      
      setTimeout(() =>{
        setIsLoading(false)
      }, 1000)

  },[categoryName])

  return (
    <div className= "container-items-light">

      {
        isLoading ? <PacmanLoader color="rgba(134, 54, 214, 0.96)" /> : <ItemList items={items}/>
      }

    </div>
  )
}
