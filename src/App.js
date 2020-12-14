import logo from "./logo.svg"
import muelle from './muelle';
import './App.css';
import Cabecera from "./cabecera";
import Main from "./main";
import Footer from "./footer";

function App() {
  const mostrarMuelle = <Cabecera nombre={muelle.nombre} />
  const mostrarContacto = <Footer contacto={muelle.contacto.telefono} />
  const barcos = muelle.barcos.map((barco)=>{
    return (<Main 
      key ={barco.nombre} 
      nombre={barco.nombre} 
      eslora={barco.eslora} 
      tripulantes={barco.tripulantes}
      />
      );
  });
  return <div>{mostrarMuelle} {barcos} {mostrarContacto}</div>
}

export default App;
