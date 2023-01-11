// import { BsFillCartCheckFill } from 'react-icons/bs'
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CardWidget = () => {


  const {cart} = useContext( CartContext )


  return (
    
    <Link to="/cart">

      <div className="container-Carrito">
        <ShoppingCartIcon fontSize="large" color="warning"/>
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </div>

    </Link>
      
  )
}
