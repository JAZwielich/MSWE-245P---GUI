import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";


function Sidebar(){
    return (
    <>
<div className="sidenav">
  <Link to="/">Home Page</Link>
  <Link to="/SecondView.js">About Page</Link>
  <a href="https://www.sandiego.gov/">Hometown</a>
  <a href="https://github.com/MrPatchz/MSWE_245P.git" target="_blank">MSWE 245 Github</a>
  <a href="https://uci.edu/">Current University</a>
  <a href="https://meyersound.com/">Meyer Sound</a>
  <Link to="/WeatherView.js">Weather</Link>
</div>
        </>
    )
}

export default Sidebar;