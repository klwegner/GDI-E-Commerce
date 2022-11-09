import logo from "../assets/fablelogo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div id="topNav">
      {/* <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">Your Profile</a>
            </li>
          </ul>
          <span class="navbar-text">
            Home of Kristen Stuff
          </span>
        </div>
      </div>
    </nav> */}
      <div className="logoDiv">
        <img src={logo} alt="logo"/>
      </div>
      <div className="navbarMid">
        <p>COLLECTIONS</p>
        <p>CUSTOMIZER</p>
        <p>SALES</p>
      </div>
      <div className="navbarEnd"><p>ITEMS</p></div>
    </div>
  );
}

export default Navbar;
