import React from 'react';
import './styles/ItemListContainer.css';

export default function ItemListContainer({greeting}) {
  return (
    <div>
        <div className="msg">{greeting}</div>
    </div>
  )
}
