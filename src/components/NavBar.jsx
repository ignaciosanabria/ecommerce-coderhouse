import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
       <a className="navbar-brand">Panadería Luna</a>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link className="nav-link" to={'/'}>Inicio </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to={'/category/panes'}>Panes </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to={'/category/facturas'}>Facturas </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to={'/category/tortas'}>Tortas </Link>
      </li>
    </ul>
    </div>
        <CartWidget cant={5}/>
       </div> 
       </nav>
    </div>
  )
}


