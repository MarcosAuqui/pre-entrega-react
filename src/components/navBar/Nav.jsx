import { BurgerButton } from "../burger-button/BurgerButton"
import "./Nav.css"

export const Nav = () => {
    return (
        <div className="navBar-container">
            <div className="logo-container">
                <img className="logo" src="https://res.cloudinary.com/dbyiqgeew/image/upload/v1669505807/logo_s12xii.png" alt="" />
            </div> 

            <div className="navBar">
                <a href="" className="navBar-item">Home</a>
                <a href="" className="navBar-item">Productos</a>
                <a href="" className="navBar-item">About us</a>
            </div>
            <BurgerButton/>
            <div className="cart-cotainer">
                <h2></h2>
            </div>

        </div>
    )
}