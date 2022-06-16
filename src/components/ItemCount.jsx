import React, {useState} from 'react';
import './styles/ItemCount.css';

export default function ItemCount({stock, initial, addOn}) {
    const [contador,setContador] = useState(initial);
  return (<>
     <div className="contador">
          <span className="contador_vista">{contador}</span>
          <div className="botonContainer">
          <button className="botonContador" onClick={() => {setContador(contador - 1 )}}>-</button>
          <button className="botonContador" onClick={() => {setContador(contador + 1 )}}>+</button>
          </div>
          <button className="reset" onClick={() => {addOn(contador)} }>Agregar al carrito</button>
     </div>
   </>  
  )
}
