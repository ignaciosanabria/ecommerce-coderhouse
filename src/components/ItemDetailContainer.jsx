import React from 'react'
import {useState, useEffect} from 'react';
import PanFrances from '../imagenes/panfrances.jpg';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(
          { id: '1', title: "Pan Francés", description: "La baguette o Pan Frances"
           +"es una variedad de pan originaria de Francia que se caracteriza por una forma alargada. " 
           +"Es uno de los formatos de pan más conocidos, producidos y consumidos a nivel internacional. "+
           "Contiene harina de trigo, agua, levadura y sal. ", price: 240, pictureUrl: PanFrances },
          );
      }, 2000);
    });

    getItem.then((result) => {
      setItem(result);
    });

  }, []);
  return (
    <>
    <h1>Le paso el Item a Item Detail</h1>
    <ItemDetail item={item} />
    </>
  )
}
