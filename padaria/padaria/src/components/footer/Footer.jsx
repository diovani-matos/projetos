import './Footer.scss'
import Wrapper from '../wrapper/Wrapper'
import Logo from '../../assets/logo.png'

function Footer(){
    return(
        <footer className="footer">
            <Wrapper>
                <img src={Logo} alt="" />

                <ul className="footer__links">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Cardápio</li>
                    <li>Reservar</li>
                </ul>
            </Wrapper>
        </footer>
    )
}

export default Footer