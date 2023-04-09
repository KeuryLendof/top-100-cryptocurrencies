import React from "react";
import './style.css'
import img1 from '../assets/images/undraw_nakamoto_-2-iv6.svg'
import img2 from '../assets/images/icon-arrow.svg'

const Inicio =()=>{


    return(
        
        <section className="productive inicioContainer">

            <figure className="productive_picture">
                <img src={img1} alt="" class="productive_img"/>
            </figure>

            <div className="productive_text">

                <h3 className="productive_title">Cryptocurrency Prices by Market Cap</h3>

                <p className="productive_paragraph">Crypto100 is the ultimate site to find the most up-to-date information on the top 100 cryptocurrencies. On Crypto100, you will find detailed statistics, analysis, charts and real-time news on the most important cryptocurrencies in the market. Stay on top of trends and discover the best investment opportunities. If you are an investor or simply interested in the world of cryptocurrencies, Crypto100 is the site to visit.</p>

                <a href="#top" className="productive_cta">
                    See Cryptocurrency
                    <img src={img2} className="productive_arrow" alt=""/>
                </a>
            </div>
        </section>
        
    )
}


export default Inicio;