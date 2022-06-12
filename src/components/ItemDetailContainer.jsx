import React from 'react'
import {useState, useEffect} from 'react';
import PanFrances from '../imagenes/panfrances.jpg';
import ItemDetail from './ItemDetail';
import PastaFrola from '../imagenes/pastafrola.png';
import SelvaNegra from '../imagenes/selvanegra.png';
import {useParams} from 'react-router-dom';
import PanNegro from '../imagenes/pannegro.jpg';
import PanMasaMadre from '../imagenes/pandemasamadre.jpg';
import TortaChaja from '../imagenes/tortachaja.png';
import TortaRedVelvet from '../imagenes/tortaredvelvet.jpg';
import BolitasFraile from '../imagenes/bolitasdefraile.png';
import Churros from '../imagenes/churros.jpg';
import MedialunasGrasa from '../imagenes/medialunasdegrasa.png';
import MedialunasManteca from '../imagenes/medialunasdemanteca.png';
import Vigilante from '../imagenes/vigilante.png';
import TortitasNegras from '../imagenes/tortitasnegras.png';

let productosComercio = [
  { id: '1', category:'panes' ,title: "Pan Francés", description: "1 Kilo de Pan Frances", price: 240, pictureUrl: PanFrances },
  { id: '2', category:'panes' ,title: "Pan Negro", description: "1 Kilo de Pan Negro", price: 240, pictureUrl: PanNegro },
  { id: '3', category:'panes' ,title: "Pan de Masa Madre", description: "1 Unidad de Pan de Masa Madre", price: 400, pictureUrl: PanMasaMadre },
  { id: '4', category:'facturas', title: "Bolitas de Fraile", description: "1 Unidad de Bolitas de Fraile", price: 50, pictureUrl: BolitasFraile },
  { id: '5', category:'facturas', title: "Churros", description: "1 Unidad de Churros", price: 50, pictureUrl: Churros },
  { id: '6', category:'facturas', title: "Medialunas de Grasa", description: "1 Unidad de Medialunas de Grasa", price: 50, pictureUrl: MedialunasGrasa },
  { id: '7', category:'facturas', title: "Medialunas de Manteca", description: "1 Unidad de Medialunas de Manteca", price: 50, pictureUrl: MedialunasManteca },
  { id: '8', category:'facturas', title: "Vigilantes", description: "1 Unidad de Vigilantes", price: 50, pictureUrl: Vigilante },
  { id: '9', category:'facturas', title: "Tortitas Negras", description: "1 Unidad de Tortitas Negras", price: 50, pictureUrl: TortitasNegras },
  { id: '10', category:'tortas', title: "Pasta Frola", description: "Pasta Frola con Membrillo", price: 600, pictureUrl: PastaFrola },
  { id: '11', category:'tortas', title: "Selva Negra", description: "1 Torta Entera de Selva Negra", price: 1200, pictureUrl: SelvaNegra },
  { id: '12', category:'tortas', title: "Torta Chaja", description: "1 Torta Entera Chaja", price: 1200, pictureUrl: TortaChaja },
  { id: '13', category:'tortas', title: "Torta Red Velvet", description: "1 Torta Entera de Red Velvet", price: 800, pictureUrl: TortaRedVelvet }
  ];

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const {id} = useParams();
  console.log("id detail container: "+id); 

 {/* setTimeout(() => {
    (!id) ? res({}) : res(productosComercio.find(item => item.id == id))
 }, 2000);*/}

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      (!id) ? res({}) : res(productosComercio.find(item => item.id == id))
    });

    getItem.then((result) => {
      setItem(result);
    });

  }, [id]);

  return (
    <>
    <ItemDetail item={item} />
    </>
  )
}
