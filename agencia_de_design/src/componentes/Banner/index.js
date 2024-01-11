import imgBanner from '../../assets/banner.png';

import './style.css';

export default function Banner(props){
    return(
        <div className="banner">
            <figure className={`imgBanner ${props.fundo}`}>
                <img src={imgBanner} alt=""/>
            </figure>
            <div className="info-banner">
                <p className='subTitulo'>
                    B R A N G I N G  /  U I  /  U X  /  T E C N O L O G I A
                </p>
                <p className='textoDestaque'>
                    Agência de Branding <span>e design digital</span>
                </p>
            </div>
        </div>
    )
}