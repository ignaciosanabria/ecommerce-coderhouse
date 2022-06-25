import React from 'react';
import { useContext } from 'react';
import { MiContexto } from '../context/CartContext';
import CartEmpty from './CartEmpty';
import CartTableLayout from './CartTableLayout';



export default function Cart() {
  const {cart} = useContext(MiContexto);
  return (
    <>
    <div>
    {cart.length === 0 ? <CartEmpty /> : <CartTableLayout cart={cart} />}
     </div>
    </>
  )
}