import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.css';
import { MiContexto } from '../context/CartContext';



export default function CartWidget({cant}) {
  const {getItemQty, cart} = useContext(MiContexto);
  return (
    <div className="cart-widget">
       <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
       {cart.length > 0 && <div className="cant-display">{getItemQty()}</div>}
    </div>
  )
}
// reemplaza en cant
// <div className="cant-display">{getItemQty()}</div>
