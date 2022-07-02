import React from 'react';
import { useState } from 'react';


export default function CheckoutForm({handleClick}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cel, setCel] = useState('');
    
  return (
    <div className='container'>
        <h1>Complete sus datos para finalizar la compra!</h1>
        <label>Nombre completo</label>
        <input style={{margin:'20px'}}onChange={(e) => setName(e.target.value)} placeholder='Ingrese su nombre completo'></input>
        <label>Número de celular</label>
        <input onChange={(e) => setCel(e.target.value)} placeholder='Ingrese su número de celular'></input>
        <label>Correo Electrónico</label>
        <input onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su correo electrónico'></input>
        <button className="btn btn-success" onClick={()=>handleClick(name,email,cel)}>Terminar compra</button>
    </div>
  )
}
