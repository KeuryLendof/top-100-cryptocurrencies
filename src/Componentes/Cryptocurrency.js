import './style.css'
import img2 from '../assets/images/icon-arrow.svg'
import foro from '../assets/images/grupo.png';
import reddit from '../assets/images/reddit.png';
import github from '../assets/images/github (2).png';


function Cryptocurrency({datos}){

    
    return(
        <div>
            <section className="productive inicioContainer">

                
                    
                <figure className="productive_picture">
                    <img src={datos.image.large} alt="" className="productive_img" />
                </figure>
                    
                

                <div className="productive_text">

                    <h3 className="productive_title">{`${datos.name}`}</h3>

                    <p className="productive_paragraph_info">{datos.description.en}</p>

                    <a href={datos.links.homepage[0]} target='_blank' rel="noreferrer" className="productive_cta">
                        {datos.links.homepage[0]}
                        <img src={img2} className="productive_arrow" alt=""/>
                    </a>  

                </div>

            </section>
            <section className='masInformacion infoContainer'>

                <div className='preciosP'>
                    <h3>Current Price</h3>
                    <section className='precios'>
                        <div>
                            <i>USD</i>
                            <p>{datos.market_data.current_price.usd}$</p>
                        </div>
                        <div>
                            <i>EUR</i>
                            <p>{datos.market_data.current_price.eur}$</p>
                        </div>
                        <div>
                            <i>ETH</i>
                            <p>{datos.market_data.current_price.eth}$</p>
                        </div>
                    </section>
                </div>

                <div className='preciosCambiosP'>
                    <h3>Price Change Percentage</h3>
                    <section className='preciosCambios'>
                        <div>
                            <i>24h</i>
                            <p className={datos.market_data.price_change_percentage_24h > 0 ? 'positivo':'negativo'}>{datos.market_data.price_change_percentage_24h}%</p>
                        </div>
                        <div>
                            <i>7d</i>
                            <p className={datos.market_data.price_change_percentage_7d > 0 ? 'positivo':'negativo'}>{datos.market_data.price_change_percentage_7d}%</p>
                        </div>
                        <div>
                            <i>30d</i>
                            <p className={datos.market_data.price_change_percentage_30d > 0 ? 'positivo':'negativo'}>{datos.market_data.price_change_percentage_30d}%</p>
                        </div>
                    </section>
                </div>

                <div className='linksP'>
                    <h3>Links</h3>
                    <section className='links'>
                        <div>
                            <a href={datos.links.official_forum_url[0]} target='_blank' rel="noreferrer">
                                <i><img src={foro} alt=""/></i>
                                <p>Official Forum</p>
                            </a>
                        </div>
                        <div>
                            <a href={datos.links.subreddit_url} target='_blank' rel="noreferrer">
                                <i><img src={reddit} alt=""/></i>
                                <p>Reddit</p>
                            </a>
                        </div>
                        <div>
                            <a href={datos.links.repos_url.github[0]} target='_blank' rel="noreferrer">
                                <i><img src={github} alt=""/></i>
                                <p>Github</p>
                            </a>
                        </div>
                    </section>
                </div>

            </section>
       </div>
    )
    

}


export default Cryptocurrency;