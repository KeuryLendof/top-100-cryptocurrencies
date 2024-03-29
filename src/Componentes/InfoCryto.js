import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Cryptocurrency from "./Cryptocurrency";
import Header from "./Header";
import Footer from "./Footer"
import Wave from "./Wave";
import './loader.css'

function InfoCryto(){
    
    const [info, setInfo] = useState();

    const {id} = useParams();

    const style = 0;

    
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(({data})=>{
            setInfo(data)
        })
    }, [])


    if(!info){
        return <div id="loader"></div>
    }

    return (
        <>
        <Header />
        <Cryptocurrency datos={info} />
        <Wave estilo={style}/>
        <Footer />
        </>
    );
};

export default InfoCryto;