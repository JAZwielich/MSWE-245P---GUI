import "./Header.css";


import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          Zwielich LLC.
        </a>
        <div className="headerRight">
          <Link className="active" to="/">
            Home
            </Link>
          <a href="mailto:zwielich.jacques@gmail.comm">Contact</a>
          <Link to="/SecondView.js">About</Link>
          
        </div>
      </div>
    </>
  );
}

export default Header;