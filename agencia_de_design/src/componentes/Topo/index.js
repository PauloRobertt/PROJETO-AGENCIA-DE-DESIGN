import logo from '../../assets/logo.png';

import './style.css';

export default function Topo(props){

    return(
        <header className={props.fundo}>
            <div className="topo">
                <figure>
                    <img className='logo' src={logo} alt="logo"/>
                </figure>
                <button className={props.fundo} onClick={props.botao}>
                    <img className="imgBotao" src={props.imgButton} alt="botão"/>
                </button>
            </div>
        </header>
    )
}