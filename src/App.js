import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';



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
     <NavBar />
     <ItemListContainer greeting={"Hola este es un saludo pasado por la prop greeting."} />
     <ItemCount initial={1} stock={5} addOn={addOn}/>
    </div>
  );
}

export default App;
