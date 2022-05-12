import { useEffect, useState } from "react";
import Crypto from "./Crypto";
import Inicio from "./Inicio";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Wave from "./Wave";
import './loader.css';

function Principal(){

  const [datos, setDatos] = useState([]);
  const [buscar, setBuscar] = useState('');

  const style = 1;

  const peticionGet= async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    setDatos(res.data)
  }

  useEffect(() => {
    peticionGet()
  }, [])

  if(!datos){
    return <div id="loader"></div>
  }

  return(
    <div className="App">
        <Header />
        <Inicio />
        <div className="join" id="search">
        <div className="join_container inicioContainer">
            <h2 className="join_title">Find your favorite cryptocurrencies here!</h2>
            <form action="" className="join_form">
            <input type="text" placeholder="example 'bitcoin' " className="join_input" onChange={e => setBuscar(e.target.value)} />
            </form>
        </div>
        </div>
        <Crypto datos={datos} buscar={buscar} />
        <Wave estilo={style}/>
        <Footer/>
    </div>
  )

}

export default Principal;