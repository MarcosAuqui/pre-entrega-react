import { BsFillCartCheckFill } from 'react-icons/bs'
import {Link} from "react-router-dom"

import React from 'react'

export const CardWidget = () => {
  return (
    
    <Link to="/card">

      <div className="container-Carrito">
        <BsFillCartCheckFill
          style={{
          fontSize: "2rem",
          color: "black"
        }}/>
        <div className="bubble-counter">
          <span>12</span>
        </div>
      </div>

    </Link>
      
  )
}
