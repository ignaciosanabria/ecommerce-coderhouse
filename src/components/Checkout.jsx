import React from 'react';
import {useContext, useState} from 'react';
import { MiContexto } from '../context/CartContext';
import CheckoutFinal from './CheckoutFinal';
import CheckoutForm from './CheckoutForm';
import { addDoc, collection, getFirestore} from 'firebase/firestore';

export default function Checkout() {
  const [mostrarForm,setMostrarForm] = useState(true);
  const {cart,getItemPrice, emptyCart} = useContext(MiContexto);
  const [idOrder, setIdOrder] = useState('');

  const db = getFirestore();
  const orderCollection = collection(db,'orders');


  function handleClick(name,email,cel) {
    const total = getItemPrice();
    const order = {
        buyer : {name, email, cel},
        items : cart,
        total : total
    }
    //console.log(order);
    addDoc(orderCollection, order).then(({id}) =>{
      setIdOrder(id);
      emptyCart();
      setMostrarForm(false);
    }) 
    //console.log(mostrarForm);
}
  return (
    <>
     {mostrarForm && <CheckoutForm handleClick={handleClick}/>}
     {!mostrarForm && <CheckoutFinal idOrder={idOrder}/>}
    </>
  )
}
