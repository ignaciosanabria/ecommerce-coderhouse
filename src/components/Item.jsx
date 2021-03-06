import React from 'react';
import {Link} from 'react-router-dom';


export default function Item({item}) {
  return (
     <>
    <div className="card" style={{width: "20rem", margin: 20, backgroundColor: 'orange'}}>
      <img className="card-img-top" src={item.image}></img>
      <div className="card-body">
        <h5 className="card-title" style={{fontFamily:'cursive',fontSize:'25px',fontWeight:'bold'}}>{item.title}</h5>
        <p className="card-text" style={{fontSize:'20px',fontWeight:'normal'}}>Descripción: {item.description}</p>
        <p className="card-text" style={{fontSize:'20px',fontWeight:'normal'}}>Precio: ${item.price}</p>
        <Link to={'/item/'+item.id}><button className="btn btn-primary btn-lg btn-block">Ver Detalle del producto</button></Link>
      </div>
   </div>
    </>  
  )
}
