import React from 'react';
import './styles/ItemDetail.css';

export default function ItemDetail({item}) {
  return (
    <div className='container'>
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center"><img src={item.pictureUrl} className="imagen"/></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Descripción Producto:</h4>
                    <p>{item.description}</p>
                    <h2 className="mt-5">
                        ${item.price}<small className="text-success">(10%off)</small>
                    </h2>
                    <button className="btn btn-primary btn-rounded">Comprar ahora</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

