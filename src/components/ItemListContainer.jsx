import React, {useState, useEffect} from 'react';
import './styles/ItemListContainer.css';
import ItemList from './ItemList';
import PanFrances from '../imagenes/panfrances.jpg';
import Facturas from "../imagenes/facturas.png";
import PastaFrola from "../imagenes/pastafrola.png";
import SelvaNegra from "../imagenes/selvanegra.png";
import SandiwchMiga from "../imagenes/sandwichdemiga.jpg"


export default function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    

    const devolverProductos = new Promise((res, rej) => {
        setTimeout(() => {
          res([
            { id: '1', title: "Pan Francés", description: "1 Kilo de Pan Frances", price: 240, pictureUrl: PanFrances },
            { id: '2', title: "Facturas", description: "1 Docena de Facturas Surtidas", price: 300, pictureUrl: Facturas },
            { id: '3', title: "Pasta Frola", description: "Pasta Frola con Membrillo", price: 600, pictureUrl: PastaFrola },
            { id: '4', title: "Selva Negra", description: "1 Torta Entera de Selva Negra", price: 900, pictureUrl: SelvaNegra },
            { id: '5', title: "Sandwiches de Miga", description: "1 Docena de Sandwiches de Miga", price: 1200, pictureUrl: SandiwchMiga }
            ]);
        }, 2000);
      });

      devolverProductos.then((result) => {
        setProductos(result);
      });

    }, []);

  return (
    <>
        <div><ItemList productos={productos}/></div>
    </>
  );
}
//*<div className="msg">{greeting}</div>
