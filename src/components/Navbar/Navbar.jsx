import logo from "../../assets/fablelogo.png";
import './Navbar.css';
// import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div id="topNav">

      <div className="logoDiv">
        <img src={logo} alt="logo"/>
      </div>
      <div className="navbarMid">
        {/* <NavLink to='/'>COLLECTIONS</NavLink>
        <NavLink to='/'>CUSTOMIZER</NavLink>
        <NavLink to='/'>SALES</NavLink> */}


        <a href='/'>COLLECTIONS</a>
        <a href='/'>CUSTOMIZER</a>
        <a href='/'>SALES</a>

      </div>
      <div className="navbarEnd"><a href='/cart'>ITEMS</a></div>

      {/* <div className="navbarEnd"><NavLink to='/cart'>ITEMS</NavLink></div> */}
    </div>
  );
}

export default Navbar;
