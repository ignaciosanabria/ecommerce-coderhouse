import React from 'react'
import { useContext } from 'react';
import { MiContexto } from '../context/CartContext';

export default function CartTableLayout({cart}) {
  const {emptyCart,deleteItem,getItemPrice} = useContext(MiContexto);
  return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">

   <div className="col-lg-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Carrito de compras</h4>
                  <p className="card-description">
                    Aquí vas a ver todos los productos que seleccionaste.
                  </p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Cantidad</th>
                          <th>Precio Unitario</th>
                          <th>Precio Total</th>
                          <th>Eliminar producto</th>
                        </tr>
                      </thead>
                      <tbody>
                      {cart && cart.map((item) => (
                        <>
                       <tr>
                         <td>{item.title}</td>
                         <td>{item.cant}</td>
                         <td>${item.price}</td>
                         <td>${item.cant * item.price}</td>
                         <td><button className="btn btn-danger" style={{margin: '10px'}} onClick={()=>deleteItem(item.id)}>Eliminar Producto</button></td>
                         </tr>
                       </>
               ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card" style={{width: "18rem"}}>
                     <div className="card-body">
                      <h5 className="card-title">Total de la compra</h5>
                     <p className="card-text">${getItemPrice()}</p>
                     <h6></h6>
                     </div>
                  </div>
                  <button className="btn btn-success" style={{margin: '50px'}}>Finalizar Compra</button>
                  <button className="btn btn-danger" style={{marginLeft: '50px'}} onClick={emptyCart}>Vaciar carrito</button>
                </div>
              </div>
            </div>
            
            </div>
              </div>
            </div>
  )
}

// <CartItemLayout key={item.id} item={item} deleteItemgetItemPrice/>
