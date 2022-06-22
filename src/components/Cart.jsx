import React from 'react';
import { useContext } from 'react';
import { MiContexto } from '../context/CartContext';



export default function Cart() {
  const {cart, emptyCart} = useContext(MiContexto);
  return (
    <>
    <h1>Se renderiza el componente Cart para ser codificado después</h1>
    <h3>{cart.length === 0 ? "El carrito se ha vaciado!" : JSON.stringify(cart)}</h3>
    <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
    </>
  )
}
