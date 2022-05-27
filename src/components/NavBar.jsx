import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
       <a className="navbar-brand">Panadería Luna</a>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
        </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Facturas</a></li>
            <li><a className="dropdown-item" href="#">Pastelería</a></li>
            <li><a className="dropdown-item" href="#">Pan</a></li>
          </ul>
        </li>
        </ul>
        </div> 
        <CartWidget cant={5}/>

       </div> 
       </nav>
    </div>
  )
}
//<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//<span className="navbar-toggler-icon"></span>
//</button>

