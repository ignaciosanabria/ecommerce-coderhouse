import React from 'react'
import {Link} from 'react-router-dom';
import GifCompra from '../imagenes/comprafinal.gif';

export default function CheckoutFinal({idOrder}) {
  return (
    <>
    <div style={{textAlign: "center"}}>
    <h1>Muchisimas gracias por su compra!</h1>
    <img src={GifCompra} style={{borderRadius:'8px',border:'3px solid black'}}/>
    <h2>Su número de orden es: {idOrder}</h2>
    <h3>Para volver al inicio y seguir comprando haga click en el botón de abajo.</h3>
    <Link to={'/'}><button className="btn btn-primary" style={{margin: '40px'}}>Volver al Inicio</button></Link>
    </div>
    </>
  )
}
