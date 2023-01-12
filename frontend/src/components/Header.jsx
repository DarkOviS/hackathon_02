import { Link } from "react-router-dom";
import loupe from "../assets/loupe.png";
import logo from "../assets/logo.png";
import connexion from "../assets/connexion.png";
import "../style/header.css";

function Header() {
  return (
    <header>
      <nav>
        <img className="connexion" src={connexion} alt="bouton connexion" />
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <img className="loupe" src={loupe} alt="loupe" />
      </nav>
    </header>
  );
}
export default Header;
