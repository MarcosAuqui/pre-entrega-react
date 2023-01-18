import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom"
import { ItemDetails } from '../itemDetails/ItemDetails'

import { getDoc, doc, collection } from 'firebase/firestore'
import { db } from '../../fireBaseConfig'



export const ItemDetailsContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect( ()=>{

    const itemCollection = collection(db, "pructs")
    const ref = doc( itemCollection, id )
    getDoc(ref)
     .then(res => {
      setProduct(
        {
          id: res.id,
          ...res.data(),
        }
      )
     })

  }, [id])

  return (
    <div className='container-details'>
      <ItemDetails product= {product}/>
    </div>
  )
}
