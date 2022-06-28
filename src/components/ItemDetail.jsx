import React from 'react';
import ItemCount from './ItemCount';
import {useEffect, useState, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import './styles/ItemDetail.css';
import { MiContexto } from '../context/CartContext';

export default function ItemDetail({item}) {
    const [cantidadItem, setCantidadItem] = useState(0);
    const [mostrarCart, setMostrarCart] = useState(false);
    const {isInCart, addItem, cart} = useContext(MiContexto);
        const addOn = (cantidad) =>{
             setCantidadItem(cantidad);
             setMostrarCart(true);
             isInCart(item.id);
             addItem(item, cantidad);
        } 

  return (
    <div className='container'>
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center"><img src={item.image} className="imagen"/></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Descripción Producto:</h4>
                    <p>{item.description}</p>
                    <h2 className="mt-5">
                        ${item.price}<small className="text-success">(10%off)</small>
                    </h2>
                    <h3>Stock disponible: {item.stock}</h3>
                    {!mostrarCart && (<ItemCount initial={1} stock={item.stock} addOn={addOn}/>)}
                    { mostrarCart && (<div className='carrito'><Link to={'/cart'}><button className="btn btn-secondary btn-lg btn-block">Ir al carrito</button></Link></div>)}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

