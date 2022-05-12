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

                <p className="productive_paragraph">ApiCrypto provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, ApiCrypto tracks community growth, open-source code development, major events and on-chain metrics.</p>

                <p className="productive_paragraph">While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, fully diluted valuation and fundamentals during your research process.</p>

                <a href="#top" className="productive_cta">
                    See Cryptocurrency
                    <img src={img2} class="productive_arrow" alt=""/>
                </a>
            </div>
        </section>
        
    )
}


export default Inicio;