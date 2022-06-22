import React, {useState} from 'react';
import { useEffect } from 'react';
import './styles/ItemCount.css';

export default function ItemCount({stock, initial, addOn}) {
    const [contador,setContador] = useState(initial);
    const [bajaBotonCarrito, setBajaBotonCarrito] = useState(false);
    const [bajaBotonMenos, setBajaBotonMenos] = useState(false);
    const [bajaBotonMas, setBajaBotonMas] = useState(false);
    const validarBotonCarrito = (stock,initial, contador) =>{
      if(contador > stock)
      {
        setBajaBotonCarrito(true);
      }
      else if(contador < initial)
      {
        setBajaBotonCarrito(true);
      }
      else{
        setBajaBotonCarrito(false);
      }
    }
    const validarBotonMenos = (initial,contador) =>{
      if(contador < initial)
      {
        setBajaBotonMenos(true);
      }
      else
      {
        setBajaBotonMenos(false);
      }
    }
    const validarBotonMas = (stock,contador) =>{
      if(contador >= stock)
      {
        setBajaBotonMas(true);
      }
      else
      {
        setBajaBotonMas(false);
      }
    }
    useEffect(()=>{
     validarBotonCarrito(stock,initial,contador);
     validarBotonMenos(initial,contador);
     validarBotonMas(stock,contador);
    });
  return (<>
     <div className="contador">
          <span className="contador_vista">{contador}</span>
          <div className="botonContainer">
          <button className="botonContador" disabled={bajaBotonMenos} onClick={() => {setContador(contador - 1 )}}>-</button>
          <button className="botonContador" disabled={bajaBotonMas} onClick={() => {setContador(contador + 1 )}}>+</button>
          </div>
          <button className="reset" disabled={bajaBotonCarrito} onClick={() => {addOn(contador)} }>Agregar al carrito</button>
     </div>
   </>  
  )
}
