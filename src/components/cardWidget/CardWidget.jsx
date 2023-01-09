// import { BsFillCartCheckFill } from 'react-icons/bs'
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React from 'react'

export const CardWidget = () => {
  return (
    
    <Link to="/cart">

      <div className="container-Carrito">
        {/* <BsFillCartCheckFill
          style={{
          fontSize: "2rem",
          color: "black"
        }}/> */}
        <ShoppingCartIcon fontSize="large" color="warning"/>
        <div className="bubble-counter">
          <span>12</span>
        </div>
      </div>

    </Link>
      
  )
}
