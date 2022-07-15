import React from 'react';
import {useContext, useState} from 'react';
import { MiContexto } from '../context/CartContext';
import CheckoutFinal from './CheckoutFinal';
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import CheckoutForm from './CheckoutForm';

export default function Checkout() {
  const [mostrarForm,setMostrarForm] = useState(true);
  const {cart,getItemPrice, emptyCart} = useContext(MiContexto);
  const [idOrder, setIdOrder] = useState('');

  const db = getFirestore();
  const orderCollection = collection(db,'orders');
 
   function onSubmit(data) {
    //console.log("Datos OnSubmit: "+JSON.stringify(data));
    const total = getItemPrice();
    const order = {
        buyer : {name: data.name, email: data.email, cel: data.cel},
        items : cart,
        total : total
    }
    console.log("order: "+JSON.stringify(order));
    addDoc(orderCollection, order).then(({id}) =>{
      setIdOrder(id);
      emptyCart();
      setMostrarForm(false);
    });
   }

  return (
    <>
     {mostrarForm && <CheckoutForm onSubmit={onSubmit}/>}
     {!mostrarForm && <CheckoutFinal idOrder={idOrder}/>}
    </>
  )
}
