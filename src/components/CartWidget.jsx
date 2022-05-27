import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

export default function CartWidget({cant}) {
  return (
    <div className="cart-widget">
       <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
       <div className="cant-display">{cant}</div>
    </div>
  )
}
