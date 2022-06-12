import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto';



function App() {
  const addOn = (stock, contador, initial) =>{
     if(contador > stock)
     {
       alert("No puede superar la cantidad maxima!");
     }
     else if(contador < initial)
     {
       alert("Debe al menos elegir 1 cantidad por el producto seleccionado!");
     }
     else{
       alert(`Usted ha agregado ${contador} productos al carrito de compra!`);
     }
  }

  return (
    <div>
      <BrowserRouter>
     <NavBar />
             {/* <ItemCount initial={1} stock={5} addOn={addOn}/> */}
             {/*<ItemListContainer greeting={"Hola este es un saludo pasado por la prop greeting."} />*/}
             {/* <ItemDetailContainer /> */}
      <Routes>
             <Route path="/" element={<ItemListContainer/>} />
             <Route path="/category/:id" element={<ItemListContainer/>} />
             <Route path="/item/:id" element={<ItemDetailContainer/>} />
             <Route path="/contacto" element={<Contacto/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
