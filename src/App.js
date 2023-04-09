import { Routes, Route } from "react-router-dom";
import './App.css';
import './Componentes/style.css'
import InfoCryto from "./Componentes/InfoCryto";
import Principal from "./Componentes/Principal";
import Favorite from "./Componentes/Favorite";


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
        </Routes>
      </div>
    </div>
  );
  
}

export default App;
