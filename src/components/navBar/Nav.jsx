
import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom"

import { CardWidget } from "../cardWidget/CardWidget"



export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#"><img className="logo" src="https://res.cloudinary.com/dbyiqgeew/image/upload/v1671073182/0d0d1533d003465e8cc4d9c66b9e055c_ucyyxh.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catalogo
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/category/figuras"  className="dropdown-item" href="#">Figuras</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link to="/category/buzos" className="dropdown-item" href="#">Buzos</Link></li>
                  <li><hr  className="dropdown-divider"/></li>
                  <li><Link to="/category/mangas" className="dropdown-item" href="#">Mangas </Link></li>
                </ul>
              </li>
              <li className="nav-item">
              <Link className="nav-link" href="#">Contactanos</Link>
              </li>
              <li>
              </li>
            </ul>
      
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Articulo" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>  */}
          </div>
          <CardWidget/>
          
        </div>
        
      </nav>
      
    )
}
 