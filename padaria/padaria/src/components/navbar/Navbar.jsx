import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <a href="#" className="navabar__logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>

        <div className={`navbar__flex ${showNav ? "show-nav" : ""}`}>
          <ul className="navbar__links">
            <li onClick={() => setShowNav(false)}>Home</li>
            <li onClick={() => setShowNav(false)}>Sobre</li>
            <li onClick={() => setShowNav(false)}>Cardápio</li>
          </ul>

          <button className="button-outline" onClick={() => setShowNav(false)}>
            Fazer reserva!
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
