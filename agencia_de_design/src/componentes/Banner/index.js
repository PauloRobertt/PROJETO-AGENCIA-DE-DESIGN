import imgBanner from '../../assets/banner.png';

export default function Banner(){
    return(
        <div>
            <figure>
                <img src={imgBanner} alt=""/>
            </figure>
            <div>
                <p>
                    BRANGING / UI / UX / TECNOLOGIA
                </p>
                <h1>
                    Agência de Branding <span>e design digital</span>
                </h1>
            </div>
        </div>
    )
}