import "./navbar.css"; 
import logo from "./img/Banco-Pichincha.png"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="h1-container">
          <h1 className="h1-line">Banco</h1>
          <h1 className="h1-line">Pichincha</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
