import "./ItemListContainer.css"
import {CustomButtom} from "../customButtom/CustomButtom.jsx"

import React from 'react'

export const ItemListContainer = ( {greeting} ) => {
  return (
    <div className='greeting'>
        <h1>{greeting}</h1>
        <CustomButtom/>
    </div>
  )
}
