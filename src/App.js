import { Routes, Route } from "react-router-dom";
import './App.css';
import './Componentes/style.css'
import InfoCryto from "./Componentes/InfoCryto";
import Principal from "./Componentes/Principal";


function App(){

  
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" exact element={<Principal/>}/>
          <Route path="informacion" element={<InfoCryto />}>
            <Route path=":id" element={<InfoCryto />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
  
}

export default App;
