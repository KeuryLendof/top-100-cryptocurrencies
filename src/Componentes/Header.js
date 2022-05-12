import { Component } from 'react'
import './style.css'



class Header extends Component{

    componentDidMount(){
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })
    }


    render(){

        return(
            <div className='contenedorHeader'>
                <header className='navContainer'>
                    {/* <div className="brand-title">GeoFig</div> */}
                    <a href='/'>
                        <h1 className="brand-title">ApiCrypto</h1>
                    </a>
                    <p className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    </p>
                    <div className="navbar-links">
                        <ul>
                            <li><a href="#top">Top100</a></li>
                            <li><a href="#search">Search</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </header>
            </div>
            
        )
    }
}

export default Header;