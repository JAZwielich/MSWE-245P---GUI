import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          Zwielich LLC.
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <a href="mailto:zwielich.jacques@gmail.comm">Contact</a>
          <a href="https://www.linkedin.com/in/jacques-zwielich-81ab7315a/">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;