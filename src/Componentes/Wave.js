import wave from '../assets/images/img2.svg'
import './style.css';


function Wave({estilo}){


    return(
        <div className={estilo > 0? 'www':'ppp'}>
            <div className="curveado">
                <img src={wave} alt=""/>
            </div>
        </div>
    )
}

export default Wave;