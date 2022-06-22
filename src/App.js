import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './App.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import CartContext from './context/CartContext';



function App() {
  {/*const addOn = (stock, contador, initial) =>{
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
  }*/}


  return (
    <div>
      <CartContext>
      <BrowserRouter>
     <NavBar />
      <Routes>
             <Route path="/" element={<ItemListContainer/>} />
             <Route path="/category/:id" element={<ItemListContainer/>} />
             <Route path="/item/:id" element={<ItemDetailContainer/>} />
             <Route path="/contacto" element={<Contacto/>} />
             <Route path="/cart" element={<Cart />} />
       </Routes>
      </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;

/* <ItemCount initial={1} stock={5} addOn={addOn}/> */
/*<ItemListContainer greeting={"Hola este es un saludo pasado por la prop greeting."} />*/
/* <ItemDetailContainer /> */
