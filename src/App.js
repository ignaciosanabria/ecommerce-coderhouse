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
     <ItemListContainer msg="Aqui va el texto que va renderizado a ItemListContainer que fue modificado con CSS." />
    </div>
  );
}

export default App;
