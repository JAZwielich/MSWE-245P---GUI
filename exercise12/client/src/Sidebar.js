import "./Sidebar.css";


import { Link } from "react-router-dom";


function Sidebar(){
    return (
    <>
<div className="nav">
    <article className="nav ul">
  <Link to="/">Boxes</Link>
  </article>
  <article className="nav ul">
  <Link to="/FeatherView.js">Feather Wands</Link>
  </article>
  <article className="nav ul">
  <Link to="/BandanaView.js">Bandana Collars</Link>
  </article>
</div>
        </>
    )
}

export default Sidebar;