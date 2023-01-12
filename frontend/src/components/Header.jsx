import loupe from "../assets/loupe.png";
import logo from "../assets/logo.png";
import connexion from "../assets/connexion.png";
import "../style/header.css";

function Header() {
  return (
    <header>
      <nav>
        <img className="connexion" src={connexion} alt="bouton connexion" />

        <img className="logo" src={logo} alt="logo" />

        <img className="loupe" src={loupe} alt="loupe" />
      </nav>
    </header>
  );
}
export default Header;
