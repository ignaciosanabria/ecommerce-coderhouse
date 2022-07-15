import React from 'react';
import {Link} from 'react-router-dom';
import './styles/CartEmpty.css';

export default function CartEmpty() {
  return (
    <>
    <div style={{textAlign:'center'}}>
        <h2>Parece que no seleccionaste nada. Empieza a comprar!</h2>
        <Link to={'/'}><button className="btn btn-primary btn-lg btn-block">Ir al Catalogo!</button></Link>
    </div>
    </>
  )
}
