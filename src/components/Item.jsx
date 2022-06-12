import React from 'react';
import {Link} from 'react-router-dom';

export default function Item({item}) {
  //console.log(item.pictureUrl);
  return (
     <>
    <div className="card" style={{width: "20rem", margin: 20, backgroundColor: 'orange'}}>
      <img className="card-img-top" src={item.pictureUrl}></img>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Descripción: {item.description}</p>
        <p className="card-text">Precio: ${item.price}</p>
        <Link to={'/item/'+item.id}><button className="btn btn-success">Ver Detalle del producto</button></Link>
      </div>
   </div>
    </>  
  )
}
