import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        <img
          src="https://fontmeme.com/permalink/211011/bb47bde4bf7b63e9e9782b8d2da0c84a.png"
          alt="netflix-font"
          border="0"
          className="filmaria-logo"
        />
      </Link>
      <Link className="favoritos" to="/favoritos">
        Salvos
      </Link>
    </header>
  );
}
