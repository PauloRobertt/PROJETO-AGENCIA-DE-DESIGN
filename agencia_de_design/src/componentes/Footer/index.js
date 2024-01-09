import logo from '../../assets/logo.png';
import logoFacebook from '../../assets/facebook.png';
import logoGooglePlus from '../../assets/google-plus.png';
import logoTwitter from '../../assets/twitter.png';
import logoLinkedin from '../../assets/linkedin.png';
import logoBehance from '../../assets/behance.png';
import logoDribble from '../../assets/dribble.png';

export default function Footer(){
    return(
        <div>
            <figure>
                <img src={logo} alt="logo"/>
            </figure>
            <div>
                <p>
                    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                </p>
                <nav>
                    <a href="">
                        <img src={logoFacebook} alt="Facebook"/>
                    </a>
                    <a href="">
                        <img src={logoTwitter} alt="Twitter"/>
                    </a>
                    <a href="">
                        <img src={logoLinkedin} alt="Linkedin"/>
                    </a>
                    <a href="">
                        <img src={logoDribble} alt="Dribble"/>
                    </a>
                    <a href="">
                        <img src={logoBehance} alt="Behance"/>
                    </a>
                    <a href="">
                        <img src={logoGooglePlus} alt="Google-Plus"/>
                    </a>
                </nav>
            </div>
            <footer>
                Copyright 2022 &copy; Paulo Robert Lima Gomes
            </footer>
        </div>
    )
}