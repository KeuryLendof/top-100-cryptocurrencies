import React from "react";
import './style.css'

//hsl(219, 30%, 18%); card
// bagr hsl(218, 28%, 13%)
//#202a3c
function Crypto({ datos, buscar }){

    const filtro = datos.filter((dato)=>
        dato.name.toLowerCase().includes(buscar.toLowerCase()) | dato.symbol.toLowerCase().includes(buscar.toLowerCase())
    )

    const redireccionar = (id) => {
        window.location.href=`/informacion/${id}`;
    }

    return(
        <div className="container cardContenedor" id="top">
            {filtro.map((k)=>{
                return(
                    <div className="card" onClick={()=>redireccionar(k.id)}>
                        <div className="puntos">{k.symbol}</div>
                        <div className="card-body">
                            <div className="card-body-item">
                                <img src={k.image}
                                    alt="" />
                                <div clas="texto-medio">
                                    <h5 className="card-title">{k.name}</h5>
                                    <p className="price">{k.current_price} US$</p>
                                    <div className="datos">
                                        <div>
                                            <p>{k.high_24h} $</p>
                                            <p>High 24h</p>
                                        </div>
                                        <div>
                                            <p>{k.low_24h} $</p>
                                            <p>Low 24h</p>
                                        </div>
                                        <div>
                                            <p>{k.last_updated}</p>
                                            <p>Last Updated</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ranking">
                                <h4>{k.market_cap_rank}</h4>
                                <p>Ranking</p>
                            </div>
                        </div>
                        <div className="circulo"></div>
                    </div>
                )
            })}
        </div>
        
    )
}


export default Crypto;