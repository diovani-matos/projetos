import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar" id="home">
      <Wrapper className="navbar__container">
        <a href="#" className="navabar__logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>

        <div className={`navbar__flex ${showNav ? "show-nav" : ""}`}>
          <ul className="navbar__links">
            <li onClick={() => setShowNav(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#sobre">Sobre</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#menu">Cardápio</a>
            </li>
          </ul>

          <button className="button-outline" onClick={() => setShowNav(false)} id="btn__nav">
            <a href="#reserva">Fazer reserva!</a>
          </button>
        </div>

        <div
          className={`navbar__menu ${showNav ? "bg-color" : ""}`}
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
}

export default Navbar;
