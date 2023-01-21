import { useState } from "react";
import Buscador from "./Componentes/Buscador.jsx";
import MiApi from "./Componentes/MiApi.jsx";
import "./Estilos/Estilos.css" 

import "./Imagenes/Fondo-Feriados3.png"


function App() {

  const [buscador, setBuscador] = useState('');
  const [ordenar, setOrdenar] = useState('');

  return (
    
    <div>
      {/* <Header tituli={"hola"}></Header> */}
      <Buscador setBuscador={setBuscador} setOrdenar={setOrdenar} ></Buscador>
      <MiApi buscador={buscador} ordenar={ordenar}></MiApi>
    </div>
  );
}

export default App;
