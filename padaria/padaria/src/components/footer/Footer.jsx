import './Footer.scss'
import Wrapper from '../wrapper/Wrapper'
import Logo from '../../assets/logo.png'

function Footer(){
    return(
        <footer className="footer">
            <Wrapper>
                <img src={Logo} alt="" />

                <ul className="footer__links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#menu">Cardápio</a></li>
                    <li><a href="#reserva">Reservar</a></li>
                </ul>
            </Wrapper>
        </footer>
    )
}

export default Footer