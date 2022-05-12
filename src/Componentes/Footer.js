import React from "react";
import { useState } from "react";
import Phone from '../assets/images/icon-phone.svg';
import Email from '../assets/images/icon-email.svg';
import Twitter from '../assets/images/gorjeo (2).png';
import Git from '../assets/images/github (3).png';
import In from '../assets/images/linkedin (1).png';
import './style.css';


const Footer=()=>{


    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      }else if (scrolled <= 300){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return(
        <footer className="footer" id="footer">
            <section className="footer__container container">

                <h1 className="brand-title">ApiCrypto</h1>

                <div className="footer__items">

                    <p className="footer__contact footer__contact--first">
                        <img src="" className="footer__icon" alt=""/>
                        While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison.
                    </p>
            
                    <div className="footer__content">
                    
                        <p className="footer__contact footer__contact--second">
                            <img src={Phone} className="footer__icon" alt=""/>
                            <a href="tel:8497850712" target='_blank' rel="noreferrer">
                            +1-849-785-0712
                            </a>
                        </p>
            
                        <div className="footer__location">
                            <p className="footer__contact">
                                <img src={Email} className="footer__icon" alt=""/>
                                <a href="mailto:lendofkeury@gmail.com? Subject=ApiCryto" target='_blank' rel="noreferrer">
                                lendofkeury@gmail.com
                                </a>
                            </p>
                        </div>
            
                    </div>
            
                    <div className="footer__social">
                        <a href="https://github.com/KeuryLendof" target='_blank' rel="noreferrer" className="footer__media"><img src={Git} className="footer__img" alt=""/></a>
                        <a href="https://twitter.com/KeuryLendof1" target='_blank' rel="noreferrer" className="footer__media"><img src={Twitter} className="footer__img" alt=""/></a>
                        <a href="https://www.linkedin.com/in/keury-lendof-599b82185/" target='_blank' rel="noreferrer" className="footer__media footer__media--last"><img src={In} className="footer__img" alt=""/></a>
                    </div>
                </div>
            
            </section>

            <div className="arriba_container" style={{display: visible ? 'inline' : 'none'}}>
                <div>
                    <a onClick={scrollToTop}>
                        <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;