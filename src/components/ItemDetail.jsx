import React from 'react';
import ItemCount from './ItemCount';
import {useState, useContext} from 'react';
import { Link} from 'react-router-dom';
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
            <h3 className="card-title" style={{fontFamily:'serif',fontSize:'40px',fontWeight:'bold'}}>{item.title}</h3>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center"><img src={item.image} className="imagen"/></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5" style={{fontFamily:'serif',fontSize:'35px',fontWeight:'bold'}}>Descripción Producto:</h4>
                    <p style={{fontFamily:'serif',fontSize:'30px',fontWeight:'normal'}}>{item.description}</p>
                    <h2 className="mt-5">
                        ${item.price}<small className="text-success">(10%off)</small>
                    </h2>
                    <h3>Stock disponible: {item.stock}</h3>
                    {!mostrarCart && (<ItemCount initial={1} stock={item.stock} addOn={addOn}/>)}
                    { mostrarCart && (<div className='carrito'><Link to={'/'}><button className="btn btn-primary btn-lg">Seguir comprando</button></Link>
                                                               <Link to={'/cart'}><button className="btn btn-success btn-lg">Ir al carrito</button></Link>                   
                    </div>)}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

