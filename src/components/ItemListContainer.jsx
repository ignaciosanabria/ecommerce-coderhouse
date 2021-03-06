import React, {useState, useEffect} from 'react';
import './styles/ItemListContainer.css';
import ItemList from './ItemList';
import PanFrances from '../imagenes/panfrances.jpg';
import PanNegro from '../imagenes/pannegro.jpg';
import PanMasaMadre from '../imagenes/pandemasamadre.jpg';
import PastaFrola from "../imagenes/pastafrola.png";
import SelvaNegra from "../imagenes/selvanegra.png";
import TortaChaja from '../imagenes/tortachaja.png';
import TortaRedVelvet from '../imagenes/tortaredvelvet.jpg';
import BolitasFraile from "../imagenes/bolitasdefraile.png";
import Churros from "../imagenes/churros.jpg";
import MedialunasGrasa from "../imagenes/medialunasdegrasa.png";
import MedialunasManteca from "../imagenes/medialunasdemanteca.png";
import Vigilante from "../imagenes/vigilante.png";
import TortitasNegras from "../imagenes/tortitasnegras.png";
import {collection,getDocs,getFirestore,query,where} from 'firebase/firestore';
import { ClipLoader } from 'react-spinners';


import {useParams} from 'react-router-dom';

let productosComercio = [
  { id: '1', category:'panes' ,title: "Pan Francés", description: "1 Kilo de Pan Frances", price: 240, pictureUrl: PanFrances, stock : 20  },
  { id: '2', category:'panes' ,title: "Pan Negro", description: "1 Kilo de Pan Negro", price: 240, pictureUrl: PanNegro, stock : 30},
  { id: '3', category:'panes' ,title: "Pan de Masa Madre", description: "1 Unidad de Pan de Masa Madre", price: 400, pictureUrl: PanMasaMadre, stock : 15 },
  { id: '4', category:'facturas', title: "Bolitas de Fraile", description: "1 Unidad de Bolitas de Fraile", price: 50, pictureUrl: BolitasFraile, stock : 60  },
  { id: '5', category:'facturas', title: "Churros", description: "1 Unidad de Churros", price: 50, pictureUrl: Churros, stock : 60 },
  { id: '6', category:'facturas', title: "Medialunas de Grasa", description: "1 Unidad de Medialunas de Grasa", price: 50, pictureUrl: MedialunasGrasa, stock : 60 },
  { id: '7', category:'facturas', title: "Medialunas de Manteca", description: "1 Unidad de Medialunas de Manteca", price: 50, pictureUrl: MedialunasManteca, stock : 60 },
  { id: '8', category:'facturas', title: "Vigilantes", description: "1 Unidad de Vigilantes", price: 50, pictureUrl: Vigilante, stock : 60 },
  { id: '9', category:'facturas', title: "Tortitas Negras", description: "1 Unidad de Tortitas Negras", price: 50, pictureUrl: TortitasNegras, stock : 60 },
  { id: '10', category:'tortas', title: "Pasta Frola", description: "Pasta Frola con Membrillo", price: 600, pictureUrl: PastaFrola, stock : 15 },
  { id: '11', category:'tortas', title: "Selva Negra", description: "1 Torta Entera de Selva Negra", price: 1200, pictureUrl: SelvaNegra, stock : 8 },
  { id: '12', category:'tortas', title: "Torta Chaja", description: "1 Torta Entera Chaja", price: 1200, pictureUrl: TortaChaja, stock : 8 },
  { id: '13', category:'tortas', title: "Torta Red Velvet", description: "1 Torta Entera de Red Velvet", price: 800, pictureUrl: TortaRedVelvet, stock : 10 }
  ];
{/*(!id) ? res(productosComercio) : res(productosComercio.filter(item => item.category == id))*/}


export default function ItemListContainer({greeting}) {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {id} = useParams(); 
  useEffect(() => {
    
    /*const devolverProductos = new Promise((res, rej) => {
        setProductos([]);
        setLoading(true);
        setError(error);
        setTimeout(() => {
          (!id) ? res(productosComercio) : res(productosComercio.filter(item => item.category === id))
        }, 2000);
      });

      devolverProductos.then((result) => {
        setProductos(result);
      })
      .catch((error)=>{
        setError(error);
      })
      .finally(()=>{
        setLoading(false);
      });*/

      const db = getFirestore();

      const productsCollection = collection(db,'items');
      if(id)
      {
        const q = query(productsCollection, where('categoryId','==',id))
        getDocs(q)
        .then((snapshot) => {
           setProductos(
             snapshot.docs.map((doc) => ({...doc.data(),id: doc.id}))
           )
        })
        .catch((error)=> {
           setError(error);
        })
        .finally(()=>{
         setLoading(false);
        })
      } else {
         getDocs(productsCollection)
         .then((snapshot) => {
            setProductos(
              snapshot.docs.map((doc) => ({...doc.data(),id: doc.id}))
            )
         })
         .catch((error)=> {
            setError(error);
         })
         .finally(()=>{
          setLoading(false);
         })
      }

    }, [id]);

  return (
    <>   
         <div>{loading && <ClipLoader color={'blue'} cssOverride={{display: "block",margin: "0 auto"}}loading={loading} size={150} />}</div>
         <div>{error && 'Hubo un error en la carga!'}</div>
        <div><ItemList productos={productos}/></div>
    </>
  );
}
//*<div className="msg">{greeting}</div>
