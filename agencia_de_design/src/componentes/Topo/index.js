import {useState} from  'react';

import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png'


import './style.css';

export default function Topo(){

    const [fundo, SetFundo] = useState("fundo-branco");

    const [iconeBotao, SetIconeBotao] = useState(moon)

    const mudarFundo = () =>{
        fundo === "fundo-branco" ? SetFundo("fundo-preto"):SetFundo("fundo-branco");
    }

    return(
        <header className={fundo}>
            <div className="topo">
                <figure>
                    <img src={logo} alt="logo"/>
                </figure>
                <button onClick={mudarFundo}>
                    <img className="imgBotao" src={iconeBotao} alt="botão"/>
                </button>
            </div>
        </header>
    )
}