import './style.css';
import Header from './Header';
import Wave from './Wave';
import Footer from './Footer';
import img from '../assets/images/page_not_found.svg';

function NoFound() {
    return (
        <>
            <Header />
            <main className='inicioContainer-no-found'>
                <img src={img} alt="" />
                <h4>The page you are looking for is not available. <a href="/">Go to the homepage</a>.</h4>
            </main>
            <Wave estilo={0}/>
            <Footer />
        </>
    )
}

export default NoFound;
