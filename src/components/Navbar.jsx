import logo from "../assets/shopping-bag.png";


function Navbar() {
    return(
        <div id="topNav">
        {/* <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="www.google.com">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      Kristen's Store
    </a> */}
 

    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="www.google.com">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      Kristen's Store
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Your Cart</a>
            </li>
          </ul>
          <span class="navbar-text">
            Home of Kristen Stuff
          </span>
        </div>
      </div>
    </nav>
</div>
    )
}

export default Navbar;