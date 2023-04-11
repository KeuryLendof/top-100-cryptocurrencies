import { Routes, Route } from "react-router-dom";
import './App.css';
import './Componentes/style.css'
import InfoCryto from "./Componentes/InfoCryto";
import Principal from "./Componentes/Principal";
import Favorite from "./Componentes/Favorite";
import NoFound from "./Componentes/NoFound";


function App(){

  
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" exact element={<Principal/>}/>
          <Route path="informacion" element={<InfoCryto />}>
            <Route path=":id" element={<InfoCryto />} />
          </Route>
          <Route path="/favorite" exact element={<Favorite/>}/>
          <Route path="*" element={<NoFound/>}/>
        </Routes>
      </div>
    </div>
  );
  
}

export default App;
