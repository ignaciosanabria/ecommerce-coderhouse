import React from 'react';
import './styles/ItemListContainer.css';

export default function ItemListContainer({msg}) {
  return (
    <div>
        <div className="msg">{msg}</div>
    </div>
  )
}
