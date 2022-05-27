import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
     <NavBar />
     <ItemListContainer greeting={"Hola este es un saludo pasado por la prop greeting."} />
    </div>
  );
}

export default App;
