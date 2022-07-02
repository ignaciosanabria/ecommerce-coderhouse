import React from 'react'
import {Link} from 'react-router-dom';

export default function CheckoutFinal({idOrder}) {
  return (
    <>
    <h1>Muchisimas gracias por su compra!</h1>
    <h2>Su Nro de Orden es: {idOrder}</h2>
    <h3>Para volver al inicio y seguir comprando haga click en el botón de abajo.</h3>
    <Link to={'/'}><button className="btn btn-primary" style={{margin: '50px'}}>Volver al Inicio</button></Link>
    </>
  )
}
